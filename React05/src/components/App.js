import React from 'react';

class App extends React.Component {
//내부 데이터는 state
//데이터를 쓴다는 것은 객체 생성 이후 -> 셍성자에 state 변수 선언

//생성자
constructor(){
    super();
    this.state = {
        data: '여기에 데이터를 입력하세요'
    }
    //함수 bind
    this.changed = this.changed.bind(this);
}

//변수를 바꿔주는 함수
changed(e){
    this.setState({data : e.target.value});
}

    render(){

        return (
            <div>
                <input type = "text" onChange={this.changed} value = {this.state.data}/><br/>

                <h1>입력 결과 : {this.state.data} </h1>
                </div>
        );
    }
}

export default App;
