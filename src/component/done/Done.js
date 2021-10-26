import React, { Component } from 'react'
import { Card } from '../../component';



export class Done extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             status: 'INPROGRESS',
        }
    }

    
    childDone(data){
        this.props.parentTodo(data);
        console.log('data iN movetoDone');
    }

    render(){
        return(
            <div id="rightbox">
                <h1>Done</h1>

                {
                this.props.doneData.length ? 
                this.props.doneData.map((item=>
                item.status === 'DONE'? <Card parentCall={this.childDone} data={item}/> : ''
                    )): null
                    } 
                
      
            </div>
        )
    }
}

// export default Done;