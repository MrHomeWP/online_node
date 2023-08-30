//创建服务器
const express = require("express");
const app = express();
//解决跨域问题
const cors = require("cors");
app.use(cors());
//共享静态资源
app.use("",express.static("./01backSystem"));//访问方式  http://127.0.0.1:3081
app.use("/newsUniapp",express.static("./02newsUniapp"));//访问方式  http://127.0.0.1:3081/newsUniapp

//测试get接口
const router = express.Router()
app.get("/get",(req,res)=>{
  res.send({
    status:"200",
    msg:"get测试接口请求成功",
  })
})

//设置正确的 MIME 类型
app.get("/assets/index-b4f31f88.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  // 发送样式表文件内容
});

// 启动服务器
app.listen(3081, () => {
  console.log("http://127.0.0.1:3081");
});
