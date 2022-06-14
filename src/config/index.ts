import { Configuration } from './Configuration'
import prodConfig from './prod'
import localConfig from './local'

let config: Configuration
if (process.env.APP_ENV === 'prod') {
  config = prodConfig
} else {
  config = localConfig
}

export default config
