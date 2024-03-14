const { Schema, model } = require('mongoose')

const ExportacionSchema = ({
    producto: {
        type: String,
        unique: true,
        required: [true, 'El Producto Es requerido']

    },
    kilos: {
        type: String,
        required: [true, 'Los Kilos son requeridos ']
    },
    precio: {
        type: String,
        required: [true, 'El Precio es requerido'],
        
    },
    precioDolar: {
        type: String,
        required: [
            true, 'El precio no fue capturado'
        ]
    },
})
module.exports = model('exportacion', ExportacionSchema)
