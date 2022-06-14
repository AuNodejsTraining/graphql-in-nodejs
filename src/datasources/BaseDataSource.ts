import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'
import { Logger } from 'winston'
import { logger } from '../common/logger'

export default class BaseDataSource extends RESTDataSource {
  protected readonly logger: Logger = logger

  didReceiveResponse<TResult> (
    response: Response,
    request: Request
  ): Promise<TResult> {
    this.memoizedResults.delete(this.cacheKeyFor(request))
    this.logger.info(`${request.method} ${request.url}`)
    return super.didReceiveResponse(response, request)
  }

  willSendRequest (request: RequestOptions): void {
    this.memoizedResults.clear()
    request.headers.set('Authorization', `Bearer ${this.context.authorization}`)
    request.headers.set('Content-Type', 'application/json')
  }
}
