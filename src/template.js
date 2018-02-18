//템플릿 함수(body인자로 마크업 넣어주고 만들어진 템플릿 반환하는 함수)
import React from 'react'
import App from './App'

const Template = (body) => 
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Document</title>
        </head>
        <body>

            {/* 서버사이드 렌더링 */}
            {body}

            {/* 클라이언트사이드 렌더링 */}
            <div id="app"></div>

            <script src="/bundle.js"></script>
        </body>
        </html>

export default Template