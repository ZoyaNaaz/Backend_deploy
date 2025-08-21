require('dotenv').config()
// console.log(process.env)
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello from backend!')
})
app.get('/twitter', (req, res)=>{
    res.send('zoyadotcom')
})
app.get('/login', (req,res)=>{
    res.send('<h2>Please Login!</h2>')
})
app.get('/youtube', (req,res)=>{
  res.send('<h3>Chai aur code</h3>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

