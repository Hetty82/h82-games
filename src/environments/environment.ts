// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { Environment } from './environment.interfaces'

const baseUrl = 'http://localhost:3000'

export const environment: Environment = {
  api: {
    friday: {
      gameDetails: baseUrl + '/friday-game-details',
      games: baseUrl + '/friday-games',
    },
    games: baseUrl + '/games',
    users: baseUrl + '/users',
  },
  production: false,
}
