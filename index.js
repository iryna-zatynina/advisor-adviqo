const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors());
app.use(express.json({extended: true}))
app.use('/api', require("./routes/advisor.route"))

async function start() {
    try {
        await mongoose.connect('mongodb+srv://adviqo:adviqo@cluster0.zlizxf3.mongodb.net/adviqo', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

start()