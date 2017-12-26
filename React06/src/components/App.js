import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor(props){
        super(props);
        //내부 데이터 정의
        this.state = {
            data : ''
        }
    this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
    }
// 이벤트를 발생시켜주는 아이의 데이터를 가져오기 위해 변수 e 설정
// 내부 변수를 이용해서 값을 넣어준다

updateState(e){
    this.setState({data : e.target.value});      
}


//ClearInput 함수는 값이 ref = "myInput"인 항목을 검색 하고 상태를 재설정하고 버튼을 클릭 한 후에 포커스를 추가합니다.
clearInput(){
    this.setState({data : ''});
     ReactDOM.findDOMNode(this.refs.myInput).focus();

}

    render(){

        return (
                <div>
                    <input value = {this.state.data} onChange = {this.updateState} 
               ref = "myInput"></input>
                    <br/>
                    <br/>
                    <input/>
                    <br/>
                    <br/>
                    <button onClick ={this.clearInput} > clean </button>
                    <h2> {this.state.data}</h2>

                </div>
        );
    }
}

export default App;
