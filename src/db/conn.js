const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Login',{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(() => {
    console.log(`Connection Successsful`);
}).catch((e)=>{
    console.log(`no connection`);
})

