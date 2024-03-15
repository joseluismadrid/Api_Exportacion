const { Schema, model } = require('mongoose')

const ExportacionSchema = ({
    producto: {
        type: String,        
        required: [true, 'El Producto Es requerido']

    },
    kilos: {
        type: Number,
        required: [true, 'Los Kilos son requeridos ']
    },
    precio: {
        type:Number,
        required: [true, 'El Precio es requerido'],
        
    },
    precioDolar: {
        type: Number,
        required: [
            true, 'El precio no fue capturado'
        ]
    },
})
module.exports = model('exportacion', ExportacionSchema)
