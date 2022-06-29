require('dotenv').config()

const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:  process.env.CLOUDINARY_API_KEY, 
    api_secret:  process.env.CLOUDINARY_API_SECRET 
  });


//método que vai executar o upload no cloudinary
//esperar uma promessa 
//configurar o tipo de resultado que queremos
exports.uploads = (file, folder) => {
    return new Promise(
        (resolve) => {
            cloudinary.uploader.upload(
                file, 
                (cloudinaryReturn) => {
                    resolve({
                        imageUrl: cloudinaryReturn.url
                    })
                }, 
                {
                    folder: folder,
                    resource_type: "auto"
                }
            )
        }
    )
}