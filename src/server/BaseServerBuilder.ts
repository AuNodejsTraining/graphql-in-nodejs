import { Request } from 'express'
import { Logger } from 'winston'
import { logger } from '../common/logger'
import { Context } from '../types/Context'

export class BaseServerBuilder {
  protected readonly _logger: Logger

  public constructor () {
    this._logger = logger
  }

  protected static isLocalEnv (): boolean {
    return process.env.APP_ENV === 'local'
  }

  protected static isProductionEnv (): boolean {
    return process.env.APP_ENV === 'prod'
  }

  protected async buildContext (req: Request): Promise<Context> {
    const authorization = req.headers["authorization"] as string
    return { authorization }
  }
}
