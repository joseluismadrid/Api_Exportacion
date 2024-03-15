const {response} = require('express')
const informar = require('../models/exportacion')

const getExportacion=async(req,res)=>{
    const Datos = await informar.find()
    res.json({
        msg: Datos,
    })
}
const postExportacion =async(req,res)=>{
    const info = req.body
    let mensaje = 'Insercion exitosa'
    try {
        const exportacion = new informar(info) //Instanciar el objeto
        await exportacion.save() //Guardar en la base de dato
        console.log(exportacion)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg:mensaje,
    })
}
const putExportacion =async(req,res)=>{
    const {producto,kilos,precio,precioDolar}=req.body
    let mensaje ='actualizacion Exitosa'
    try{
        const exportacion = await informar.findOneAndUpdate({producto:producto},{kilos:kilos,precio:precio,precioDolar:precioDolar});
        
    }catch(error){
        mensaje= error
        console.log(error)
    }
    res.json({
        msg:mensaje
    })
}
const deleteExportacion = async(req,res)=>{
    const {producto}=req.body
    let mensaje= ''
    try{
        const exportacion = await informar.findOneAndDelete({producto})
        mensaje ='Eliminacion exitosa'
    }catch(error){
        mensaje= error
        console.log(error)
    }res.json({
        msg:mensaje
    })
}

module.exports = {
    getExportacion,
    postExportacion,
    putExportacion,
    deleteExportacion
}