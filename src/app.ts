import express from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
const app = express()

//routes
app.get('/', (req, res) => {
    // const error = createHttpError(400, "something went wrong")
    // throw error;
    res.json({
        message: "Ebook api is up and running"
    })

    // Global error handlers
    app.use(globalErrorHandler)
})

//export
export default app