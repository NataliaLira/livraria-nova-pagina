const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'natilira', 
    api_key: '349441726598591', 
    api_secret: 'QJ3aZvNe6SgYmwCRUc29mnFEoz8' 
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