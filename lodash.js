const express = require('express');
const _ = require('lodash');


const app=express();
const PORT=3000;

app.get('/lodash/sum',(req,res)=>{
    const{a,b}=req.query;
    const result=_.add(Number(a),Number(b));
    res.json({operation:'sum',result});
});

app.get('/lodash/subtraction',(req,res)=>{
    const{a,b}=req.query;
    const result=_.subtract(Number(a),Number(b));
    res.json({operation:'subtraction',result});
});

app.get('/lodash/multiplication',(req,res)=>{
       const{a,b}=req.query;
       const result = _.multiply(Number(a),Number(b));
       res.json({operation:'multiplication',result});
});

app.get('/lodash/division',(req,res)=>{
    const{a,b}=req.query;
    if(Number(b)==0){
        return res.status(400).json({error:'Division by zero is not allowed'})
    }
    const result=_.divide(Number(a),Number(b));
    res.json({operation:'division',result});
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
