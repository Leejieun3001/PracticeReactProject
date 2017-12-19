import React from 'react';

//(2)컴포넌트 생성
//                      React는 위에 import 한것을 사용한것
class Header extends React.Component{
    render(){
        return(
            <h1>This is header</h1>
        );
    }
}

class Body extends React.Component{
    render(){
        return(
            <h3>This is Body</h3>
        );
    }
}

//(3) 데이터를 table 형태로 만들어 주기 위한 컴포넌트
// state 속의 데이터를 다른 컴포넌트로 전달해 주는 컴포넌트
class TableData extends React.Component{
    //모든 컴포넌트엔 render 가 있음
     //JXS 문법  ->>>> JSP의 스크립트릿 이랑 비슷 하다 =>  {}을 이용하여 자바스크립트의 변수를 가져옴
    render(){
        return(            
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.description}</td>
           </tr>
        );
    }
    
}
class App extends React.Component {

//(3)
// 생성자 java, javascript 생성자에서 생성자를 불러줄때 super(); 첫줄에 해줌
    constructor(){
        super();
        //컴포넌트 자체의 state
        //state 속성이 데이터를 넣어준 것이다  json 구조!
        //App 안에서 데이터 정의 해서 state
        //매번 바뀔수 있음으로 생성자를 통해서 정의 해준다
        this.state = {
            //데이터 정의
            data : 
            [
              {
                  "id":1,
                  "name":"test01",
                  "description":"desc01"                  
              },
             {
                 "id":2,
                  "name":"test02",
                  "description":"desc02"
                 
             },
             {
                 "id":3,
                  "name":"test03",
                  "description":"desc03"
             }
            ]
        }
    }

    
    render(){
        var style_test = {
            fontSize : 50,
            color : '#FF0000'
        }

         {/*            연습 1 스타일 적용            
           <div>
               <h1>Hello React Skeleton</h1>
               <h3> 이지은 </h3>
           //스타일 적용
           <p  style={style_test}> hello</p>
           </div>

             연습 2 컴포넌트 불러오기 
(2) 컴포넌트 생성 컴포넌트 여러개 있을을 때는 <div로 묶어줘야함 안그러면 오류>
           <div>
           <Header/>
           <Body/>
           </div>
            
         연습 3 데이터 흐름 (컴포넌트 내부 state , 컴포넌트 외부 props)
 {this.state.data.map} map 구조로 바뀐다는 뜻
            컴포넌트 호출 시 <>  이용
            map 구조로 가져와줌   */}   
        return (

                <div>            
                <Header/>
                <table>
                    <tbody>
                        { this.state.data.map( (person, i ) =>  
                            <TableData key = {i} data={person}  />)}
                    </tbody>
                </table>
            </div>            
            
        );
    }
}

export default App;