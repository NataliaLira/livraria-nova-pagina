const { Books } = require('../database/models')

const imageFolder = 'images/'

const BookController = {
    async create(req, res) {

        const file = req.files[0]

        const newBook = await Books.create({
            ...req.body,
            image: imageFolder + file.filename
        })

        return res.status(201).json({dadosFinais: newBook})
    }
}

module.exports = BookController
