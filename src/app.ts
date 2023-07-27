import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify() // criar a aplicação

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
