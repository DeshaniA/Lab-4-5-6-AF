const  UUID = require('uuid');
const {getAll, getById, removeById, save, update} = require('../dal/posts.dao');




let createPost =async({name, description}) =>{
    const post = {
            id:UUID,
            name,
            description,
            postDate:new Date()
    };

    return await save(post);

    };
let getPosts = async ()=>{
    return getAll();
};


let getPost = async () =>{
    return getById(id);
};

let removePost = async () =>{
    return removeById(id);
}
let updatePost = async (id,{name,description,postedDate}) =>{
    return await update(id,{name,description,postedDate});
}

module.exports ={
    createPost,
    getPosts,
    getPost,
    removePost,
    updatePost
};



