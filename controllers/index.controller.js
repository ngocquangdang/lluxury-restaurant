module.exports.index= (req, res)=>{
    res.render('index')
}
module.exports.menu= (req, res)=>{
    res.render('./menu-page/menu')
}
module.exports.about_us= (req, res)=>{
    res.render('./about-us/about-us')
}
module.exports.blogs= (req, res) =>{
    res.render('./blog/blog')
}

