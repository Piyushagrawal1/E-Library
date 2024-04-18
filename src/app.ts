import express from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
import userRouter from './user/userRouter'

const app = express()
app.use(express.json())

//routes
app.get('/', (req, res) => {
    // const error = createHttpError(400, "something went wrong")
    // throw error;
    res.json({
        message: "Ebook api is up and running"
    })

    app.use("/api/users", userRouter)

    // Global error handlers
    app.use(globalErrorHandler)
})

//export
export default app