const path = require("path");
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class VeiculoController{
    static formCadastro(req, res) {
        res.sendFile(path.join(__dirname, ".. ", "views", "formVeiculo.html"));
    }
    static async cadastrar(req, res) {
        //res.json(req.body);
        const veiculo = await prisma.veiculo.create({
            data:{
                placa: req.body.placa,
                modelo: req.body.modelo,
                ano: parseInt(req.body.ano), 
                cor: req.body.cor,
            },
        })
        res.send(`O veiculo foi cadastrado sob o ID: ${veiculo.id}, modelo: ${veiculo.modelo}, ano: ${veiculo.ano} e cor: ${veiculo.cor}.`)
    }
    static buscarTodos(req, res) {}
}

module.exports = VeiculoController;