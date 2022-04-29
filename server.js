
import express from 'express'


const app = express()
//middleware

import notFoundMiddle from './middleware/not-found.js'

app.get("/", (req, res) => {
    res.send("Welcome!")
})

app.use(notFoundMiddle)

const port = process.env.PORT || 3003
app.listen(port, () => {
    console.log(`Server is listening on port number: ${port}`)
})