import React from 'react';

class App extends React.Component {
//내부 데이터는 state
//데이터를 쓴다는 것은 객체 생성 이후 -> 셍성자에 state 변수 선언

//생성자
constructor(){
    super();
    this.state = {
        data: '여기에 데이터를 입력하세요',
        data2 : 'init data'
    }
    //함수 bind
    this.changed = this.changed.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
}

//변수를 바꿔주는 함수
changed(e){
    this.setState({data : e.target.value});
}

updateHandler(){
    this.setState({data2: "updata data"});
}

    render(){

        return (
            <div>
                <input type = "text" onChange={this.changed} value = {this.state.data}/><br/>

                <h1>입력 결과 : {this.state.data} </h1>
                <br/>
                <Content mProp = {this.state.data2} updateProp = {this.updateHandler} />     
            </div>
        );
    }
}

//Content 컴포넌트 생성
class Content extends React.Component{
    render(){
        return(
            <div>
                <button onClick = {this.props.updateProp} > BUTTON </button>
                <h1> {this.props.mProp} </h1>
            </div>
        );
    }
}

export default App;
