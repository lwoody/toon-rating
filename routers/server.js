import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from '../src/App'
import Template from '../src/Template'

const app = express() // app서버 생성

app.use(express.static('dist/public')) // 정적 asset 경로 할당 - bundle 및 img, css 파일 로드 설정
app.use(express.static(__dirname + '../views')); // html file 위치 정의

//서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//react 서버사이드 렌더링
app.get('/test',(req, res)=>{ // request handler
    // const body = ReactDOM.renderToString(<App/>)
    const html = ReactDOM.renderToString(Template(<App/>))// 이렇게 템플릿 만들어서 반환해주는게 서버측 렌더링 핵심
    res.send(html)
})

//html file 렌더링
app.get('/index',function(req, res){    
    res.render('index.html');
})

//string을 바로 렌더링
app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000,()=>{
    console.log('port 3000 listening')//터미널 콘솔
})