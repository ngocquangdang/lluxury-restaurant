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
module.exports.blogs_detail= (req, res) =>{
    res.render('./blog/blog-detail')
}
module.exports.book_a_table= (req, res) =>{
    res.render('./book-a-table/main')
}
module.exports.contact_us= (req, res) =>{
    res.render('./contact/contact_us')
}

