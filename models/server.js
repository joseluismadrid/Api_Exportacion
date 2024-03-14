const express = require('express')
const cors = require ('cors')
const body = require ('body-parser')
const { dbConection } = require('../database/config')


class Server{

    constructor(){
        this.app=express()
        this.port=process.env.PORT
        this.ExportacionPath= '/exportacion'
        this.middlewares()
        this.routes()
        this.conectarDB()
    }
    listen(){
        this.app.listen(
            this.port,()=>{
                console.log('Escuchando por el puerto'+this.port)
            }
            
        )
    }
    routes(){
         this.app.use(this.ExportacionPath,require('../routes/exportaciones'))       
    }
    middlewares(){
        this.app.use(cors()),
        this.app.use( body.json()) 
    }
    async conectarDB(){
        await dbConection()
    }
}
module.exports = {Server}