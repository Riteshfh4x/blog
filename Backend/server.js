import express from "express"
import cors from "cors"

let app = express()
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("HOME PART BACKEND")
})
app.post("/login", (req, res) => {
    res.send("HOME PART BACKEND")
    console.log(req.body)
})
app.post("/register", (req, res) => {
    res.send("HOME PART BACKEND")
    console.log(req.body)
})

app.listen(8000, () => console.log("running backend on 8000"))


// express.json()

