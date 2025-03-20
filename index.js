const app = require("express")();

app.get("/", (req, res)=>{
    res.send("Receba");
});

let port = 8000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});