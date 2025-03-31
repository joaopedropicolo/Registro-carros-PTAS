const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

const veiculosRoutes = require("./routes/veiculosRoutes")
app.use("/veiculos", veiculosRoutes);

app.get("/", (req, res)=>{
    res.send("Receba");
});

let port = 8000; //8000 Default Port
app.listen(port, (err) => {
    if(err){
        console.log("Erro: "+JSONstringify(err));
    } else {
    console.log(`Servidor rodando em http://localhost:${port}`);
    }
});