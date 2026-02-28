const express = require("express");
const Path2D = require("path");
const app = express();

app.use(express.json());
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.sendFile(Path2D.join(__dirname,"public","cal.html"));
});
app.post("/calculate",(req,res)=>{
    const {num1, num2, operator } =
    req.body;
     
    let result;
     switch (operator){
        case "+":
            result= num1 +num2 ;
            break;
        case "-":
            result= num1 -num2 ;
            break;
        case "*":
            result= num1* num2;
            break;
        case "/":
            result= num2 !==0 ? num1 / num2: "Cannot divide by zero";
            break;
        default:
            result = " Invalid Operator";
     }
     res.json({result});
});
const PORT = process.env.PORT || 1000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});