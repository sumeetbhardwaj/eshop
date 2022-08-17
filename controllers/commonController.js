exports.home = (req, res, next)=>{
    res.render("home", {title:"Home | E-Shopper"})
}
exports.blog = (req, res, next)=>{
    res.render("blog", {title:"Blogs | E-Shopper"})
}
exports.singleBlog = (req, res, next)=>{
    res.render("singleBlog" , {title:"Single Blog | E-Shopper"})
}

exports.contact = (req, res, next)=>{
    res.render("contact", {title:"Contact | E-Shopper"})
}

exports.error404 = (req, res, next)=>{
    res.render("404", {title:"404 | E-Shopper"})
}