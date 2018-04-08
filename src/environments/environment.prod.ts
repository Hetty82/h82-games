import { environment as devEnvironment } from './environment'
import { Environment } from './environment.interfaces'

export const environment: Environment = {
  ...devEnvironment,
  production: true,
}
