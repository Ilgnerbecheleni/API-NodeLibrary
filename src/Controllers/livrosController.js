import livros from "../Models/Livro.js";


class LIvroController {

    static getLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((erro, livros) => {
                if (erro) {
                    console.log(erro);
                } else
                    res.status(200).json(livros);
            });
    }

    static getLivroId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
            .populate('autor', 'nome').
            exec((err, livros) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} não encontrado` })
                } else {
                    res.status(200).send(livros);

                }
            })
    }

    static postLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: `${err.message} falha ao cadastrar livro` });
            } else {
                res.status(201).send(livro.toJSON());

            }
        })

    }

    static putLivro = (req, res) => {
        const id = req.params.id;
        const livro = req.body;
        livros.findByIdAndUpdate(id, { $set: livro }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro Atualizado" });
            } else {
                res.status(500).send({ message: `${err.message} falha ao cadastrar livro` });

            }
        })


    }
    static deleteLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro Excluido" });
            } else {
                res.status(500).send({ message: `${err.message} falha ao excluir livro` });
            }
        }
        )
    }


    static GetLivroEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({ "editora": editora }, {}, (err, livros) => {
            if (!err) {
                res.status(200).send(livros);
            } else {
                res.status(500).send({ message: `${err.message} falha ao excluir livro` });
            }


        })


    }

}


export default LIvroController;