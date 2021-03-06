'use strict';

const repository = require('../repositories/produto-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();

function produtoController() {

}

produtoController.prototype.post = async (req, res) => {

    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Nome obrigatório');
    _validationContract.isRequired(req.body.descricao, 'Descrição obrigatório');
    // _validationContract.isRequired(req.body.foto, 'Foto obrigatório');
    _validationContract.isRequired(req.body.preco, 'Preço obrigatório');
    _validationContract.isRequired(req.body.categoriaId, 'Categoria id obrigatório');

    if(req.body.preco){
        _validationContract.isTrue(req.body.preco == 0, 'Preço deve ser maior que 0');
    }

    ctrlBase.post(_repo, _validationContract, req, res);
};

produtoController.prototype.put = async (req, res) => {

    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Nome obrigatório');
    _validationContract.isRequired(req.body.descricao, 'Descrição obrigatório');
    _validationContract.isRequired(req.body.foto, 'Foto obrigatório');
    _validationContract.isRequired(req.body.preco, 'Preço obrigatório');
    _validationContract.isRequired(req.body.categoriaId, 'Categoria id obrigatório');
    _validationContract.isRequired(req.params.id, 'ID obrigatório');

    if(req.body.preco){
        _validationContract.isTrue(req.body.preco == 0, 'Preço deve ser maior que 0');
    }

    ctrlBase.put(_repo, _validationContract, req, res);
};

produtoController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

produtoController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

produtoController.prototype.getByCategoriaId = async (req, res) => {
    try{
        let id = req.params.id;
        if(id){
            let data = await _repo.getByCategoriaId(req.params.id);
            res.status(200).send(data);
        } else {
            res.status(400).send({
                message: 'Informe o id da Categoria',
                validation: {}
            })
        }
    }catch (error) {
        console.log('get com error, motivo', err);
        res.status(500).send({message: 'Errro no processamento', error: err});
    }
};

produtoController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = produtoController;
