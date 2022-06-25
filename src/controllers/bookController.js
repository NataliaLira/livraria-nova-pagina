const { Books } = require('../database/models');
const cloudinary = require('../config/cloudinary')

const imageFolder = 'images/'

const BookController = {
    async create(req, res) {

        const file = req.files[0];
        const uploadPath = await cloudinary.uploads(file.path, 'livraria')
        
        const newBook = await Books.create({
            ...req.body,
            // forma de upload na aplicacao 
            // image: imageFolder + file.filename
            image: uploadPath.imageUrl
        })

        return res.status(201).json({dados: newBook})
    }
}

module.exports = BookController
