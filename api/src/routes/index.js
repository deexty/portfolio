import express from "express"
import skillRouter from "./skillRoutes.js"

const routes = (app) =>{
    app.use(
        express.json(),
        skillRouter
    )
}

export default routes
