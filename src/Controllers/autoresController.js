import autores from "../Models/Autor.js";


class AutorController {

    static getAutores = (req, res) => {
        autores.find((erro, autores) => {
            if (erro) {
                console.log(erro);
            } else
                res.status(200).json(autores);
        });
    }

    static getAutoreId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({ message: `${err.message} não encontrado` })
            } else {
                res.status(200).send(autores);

            }
        })
    }

    static postAutores = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: `${err.message} falha ao cadastrar autor` });
            } else {
                res.status(201).send(autor.toJSON());

            }
        })

    }

    static putAutores = (req, res) => {
        const id = req.params.id;
        const autor = req.body;
        autores.findByIdAndUpdate(id, { $set: autor }, (err) => {
            if (!err) {
                res.status(200).send({ message: "autor Atualizado" });
            } else {
                res.status(500).send({ message: `${err.message} falha ao cadastrar autor` });

            }
        })


    }
    static deleteAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "autor Excluido" });
            } else {
                res.status(500).send({ message: `${err.message} falha ao excluir autor` });
            }
        }
        )
    }

}


export default AutorController;