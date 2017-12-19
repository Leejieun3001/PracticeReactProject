import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            head : "head from state ..."
            ,content : "content from state ..."
        };
    }

    render(){
        return(
          <div>
        <h1> {this.state.head}</h1>
        <h2>{this.state.content}</h2>

        <h1>{this.props.head}</h1>
        <h2>{this.props.content}</h2>

        <Head head = {this.state.head} />
        <Content content = {this.state.content}/>        
           </div> 
        );
    }
}

class Head extends React.Component{
    render(){
        return(
            <h1> {this.props.head} "test" </h1>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <h1> {this.props.content} "test"</h1>
        );
    }
}

export default App;