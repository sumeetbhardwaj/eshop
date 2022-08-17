exports.register = (req, res, next)=>{
    res.render("register", {title:"Register | E-Shopper"});
}

exports.login = (req, res, next)=>{
    res.render("login", {title:"Login | E-Shopper"});
}