const express = require('express') // require thu vien
const app = express() //Khoi tao express
const port = 3000

//D9inh5 nghia route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})