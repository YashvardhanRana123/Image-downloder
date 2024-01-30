const imagedownloder = require('image-downloader');
const options ={
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJcbw8WM36J5vhuGm1DLEVQ2t9wYemU8ZoK8Ux0LH-w&s",
    dest:"./download",
};

imagedownloder.image(options)
.then(({filename})=>{
    console.log("file saved"+ filename)
}) .catch((err) => console.error(err))
