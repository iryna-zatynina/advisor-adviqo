const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: 'http://localhost:3000', 
  }));
app.use('/api/add', require("./routes/advisor.route"))

async function start() {
    try {
        await mongoose.connect('mongodb+srv://adviqo:adviqo@cluster0.zlizxf3.mongodb.net/?retryWrites=true&w=majority', {
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