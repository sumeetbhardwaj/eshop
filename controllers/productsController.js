exports.products = (req, res, next)=>{
    res.render("shop", {title:"Products | E-Shopper"})
}

exports.productDetails = (req, res, next)=>{
    res.render("productDetails", {title:"Product Details | E-Shopper"})
}

exports.cart = (req, res, next)=>{
    res.render("cart", {title:"Cart | E-Shopper"})
}

exports.checkOut = (req, res, next)=>{
    res.render("checkOut", {title:"Checkout | E-Shopper"})
}