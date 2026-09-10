import express from "express"

const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"hello world !",
    })
})

app.get("/app/data",(req,res)=>{
    const data = {
        id: 1234,
        name:"hello world",
        description:"this is description"
    }
    res.status(200).json(data)
})

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date() });
})

app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
})