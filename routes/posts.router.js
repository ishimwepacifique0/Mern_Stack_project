const express = require('express')
const router = express.Router()
const postcontroller = require('../controller/posts.controller')

router.get('/',postcontroller.getAll)
router.get('/:id',postcontroller.getIdAll)
router.post('/',postcontroller.savedata)
router.patch('/:id',postcontroller.edit)
router.delete('/:id',postcontroller.delete)



module.exports = router