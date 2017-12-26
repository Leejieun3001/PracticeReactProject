import React,{Component} from 'react';

//key속성 javascript의 map을 이용하여 데이터 가져오기
class App extends React.Component {
    constructor(){
        super();
        this.state ={
            person : [ {name : "first,,,,", id : 1}
                     , {name : "second,,,,", id : 2}
                     , {name : "third,,,,", id : 3}
                     , {name : "fourth,,,,", id : 4}]
         ,animal : [{name : "elephent"}, {name : "cat"}]
        }

    }
    //map을 이용해서 데이터를 세팅
    render(){

        //map구조로 순환 시킬 것이다
        //this.stat.person.map ((data,i)=>{}) 함수 요청이 될 때 일어날 일을 {}안에다 코딩

        return (
                <div>
              {/*
                this.state.animal.map(data , i) => <호출할 타 모듈(컴포턴트) 전달할 데이터 명={}></>
              */}
                    {this.state.person.map((data, i)=><Content passData={data} key={data.id}/>)}
                    {this.state.animal.map((data, i )=><Content2 passData2 = {data} key = {data.id}/>)}
                </div>
        );
    }
}

class Content extends Component {
    render(){
        return(
            <div>
                <h2> {this.props.passData.name}</h2>
                </div>

        );
    }
}

class Content2 extends Component{
    render(){
        return(
            <div>
                <h2> {this.props.passData2.name}</h2>
                </div>

        );
    }
}

export default App;
