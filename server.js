
const express = require("express");
const app = express();

app.use(express.json())

app.listen(3002,()=>{
    console.log("Server is running on port 3002");
});

app.use("/",required("./routes"))

// app.get("/getdata",(req , res)=>{
//     res.send({message: "Hello World! from GET"})
// })

app.post("/getdata",(req , res)=>{
    console.log("Hello World! from POST", req.body)
})