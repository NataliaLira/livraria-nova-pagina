const { Books } = require('../database/models')

const BookController = {
    async create(req, res) {
        const newBook = await Books.create({
            ...req.body
        })

        return res.status(201).json({dadosFinais: newBook})
    }
}

module.exports = BookController
