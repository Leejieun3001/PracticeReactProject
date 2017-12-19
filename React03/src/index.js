import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');    
//props 속성을 사용하여 데이터 넘기
ReactDOM.render(<App head="head" content ="content"/>, rootElement);
