import Router from '@koa/router'

import * as users  from './app/users/index.js'
import * as guesses  from './app/guesses/index.js'
import * as games  from './app/games/index.js'

export const router = new Router()

router.get('/login', users.login)
router.post('/users', users.create)

router.post('/guesses', guesses.create)

router.get('/games', games.list)

router.get('/:username', guesses.list)