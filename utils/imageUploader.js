const cloudinary = require('cloudinary').v2;

exports.uploadImageToCloudinary =  async (file,folder,height,quality) =>{
    console.log("In cloudinary",file,folder)
    const options ={folder:folder,resource_type:"auto",use_filename:true,unique_filename:false}
    if(height) options.height = height;
    if (quality) {
        options.quality=quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options)
}