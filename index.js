const app = require("express")();

app.get("/", (req, res)=>{
    res.send("pomba do divino");
});

app.listen(8000);