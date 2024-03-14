const {Router} = require('express')

const route = Router()

const {getExportacion, postExportacion, putExportacion, deleteExportacion} = require('../controller/exportacion') //Importando el controlador

route.get('/', getExportacion)

route.post('/', postExportacion)

route.put('/', putExportacion)

route.delete('/', deleteExportacion)

module.exports = route