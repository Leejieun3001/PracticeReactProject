import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    //함수를 호출할 때 반드시 bind 시켜 주어야 한다!
    constructor(props){
        super(props);
        console.log("생성자 호출");
        // 이벤트와 핸들러를 연결(bind)
        this.forcusEventFun = this.forcusEventFun.bind(this);
        this.findNode = this.findNode.bind(this);

    }

    //이벤트 핸들러
    forcusEventFun(){
        console.log("이것은 frocusUpdate 호출 입니다");
        //forceUpdate(); ==>재실행 =>  호출할 경우 render()함수가 호출 된다!
        this.forceUpdate();
        alert("이벤트 핸들러 test");
    }

    findNode(){
        console.log("이것은 find Node 호출 입니다");
        var button = document.getElementById("test");
        ReactDOM.findDOMNode(button).style.color = 'red';
    }

    render(){
        console.log("이것은 render 호출 입니다");
        return (
                <div>
                    <button onClick ={this.forcusEventFun}>Random number UPDATE</button> <br/>
                    <button id ='test' onClick={this.findNode}> Button </button> <br/>
                    <h1> Random number : {Math.random()}</h1>
                 </div>
        );
    }
}

export default App;
