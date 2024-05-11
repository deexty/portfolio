import express from "express"
import skillRouter from "./skillRoutes.js"
import imageRouter from "./imagesRoutes.js"
import projetoRouter from "./projetoRoutes.js"

const routes = (app) =>{
    app.use(
        express.json(),
        skillRouter,
        imageRouter,
        projetoRouter
    )
}

export default routes
