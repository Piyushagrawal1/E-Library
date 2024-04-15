import express from 'express'
const app = express()

//routes
app.get('/', (req, res) => {
    res.json({
        message: "Ebook api is up and running"
    })
})

//export
export default app