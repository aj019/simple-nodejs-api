const express = require('express')
const app = express()

app.get("/test",(req,res) => {
    console.log("Test");
    res.json({
        "msg": "Test is Successfull"
    })
})


app.listen(8081,(err) => {
    if (err) console.log("Err ",err);
    console.log("Server is listening on port 8081");
})