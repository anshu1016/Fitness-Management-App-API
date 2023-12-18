

const dotenv = require('dotenv');
const connectDatabase = require("../db/db.js")


//config
dotenv.config({ path: "/config/config.env" })



//connecting to database
connectDatabase()

app.get("/", (req, res) => {
    res.json("Connected To Backend")
})

// app.listen(4000, () => {
//     console.log(`Server is listening to ${4000}`)
// })