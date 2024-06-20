const express = require('express')
const app = express()
const path = require('path')
const userModel = require("./models/usermodels")
const usermodels = require('./models/usermodels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    // res.render("home")
    res.send("hello")

})

app.get('/test',async (req,res)=>{
  let user = await  userModel.find()
  res.send(user)
})

app.listen(3000)





// app.get('/instagram', (req, res) => {
//     res.render("index")
// })

// app.get('/create', (req, res) => {
   
//     res.render("create",{key:false})

// })

// app.post('/created', async (req, res) => {
//     let user = await userModel.findOne({ email: req.body.email })
//     if (user) {
//         return res.render("create",{key:true})
//     }
//     let { name, email, username } = req.body;
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(req.body.password, salt, function (err, hash) {
//             userModel.create({
//                 name,
//                 email,
//                 username,
//                 password: hash,
//             }).then(function (user) {
//                 let data = jwt.sign({ email: user.email, username: user.username }, "hello")
//                 res.cookie("token", data)
//                 res.render("home")
//             })
//         })
//     })

// })

// app.get('/logout', (req, res) => {
//     res.cookie("token", "")
//     res.redirect('/instagram')
// })

// async function verify(req, res, next) {
//     let token = req.cookies.token
//     let decoded = jwt.verify(token, "hello")
//     let user = await userModel.findOne({ email: decoded.email, username: decoded.username })
   
//     if (user) {
//        res.redirect('/home')
//     }else{
//         return res.redirect('/instagram')
//     }
//     next()
// }

// app.get('/profile',verify,(req,res)=>{
//     res.send("likes")
// })

// app.post('/login',async(req,res)=>{
//     let {email , password} = req.body;
//    let user = await userModel.findOne({email})
//     bcrypt.compare(password, user.password, function(err, result){
//         if(result){
//           let token =   jwt.sign({email: user.email, username: user.username},"hello")
//           res.cookie("token",token)
//             res.render("home")

//         }else{
//            return  res.redirect('/instagram')
//         }
//     })
// })
