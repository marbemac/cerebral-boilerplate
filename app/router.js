import { create, HistoryLocation, HashLocation } from 'react-router'
import routes from './routes.js'

let router = create({
  location: HashLocation,
  routes: routes
})

export default router
