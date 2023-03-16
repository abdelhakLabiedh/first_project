const express=require('express')
const app = express()

//

app.use('/',(req,res)=>{
    res.json({message : 'salut'})
})
const port=3000
app.listen(port,()=>console.log(`server done in ${port}`))