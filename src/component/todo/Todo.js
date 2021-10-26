import React, { Component } from 'react';
import { Card } from '../../component';



export class Todo extends Component{
    constructor(props) {
        super(props)
        this.state=
        {
            status: 'INPROGRESS'
        }
        this.child = this.child.bind(this)
    }
    
    
    child(data){
        this.props.parentTodo(data)
         console.log('ParentTodo',data);
    }


    render(){

        return(
            <div id="leftbox">
                <h1>ToDo</h1>
                {this.props.newData.length ? 
                this.props.newData.map((item=>
                <Card parentCall={this.child} data={item}/>
                    ))
                    : null}

                
            </div>
        )
    }
}

// export default Todo