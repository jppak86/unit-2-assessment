import { Router } from 'express'
const router = Router()

import * as booksCtrl from '../controllers/books.js'

router.get('/new', booksCtrl.new)
router.get('/', booksCtrl.index)
router.post('/', booksCtrl.create)

export {
  router
}
