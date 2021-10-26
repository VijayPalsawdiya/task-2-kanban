import React, { Component } from 'react'
import { Card } from '../../component';


export class InProgress extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            status: 'DONE'     
        }
        this.moveToDone = this.moveToDone.bind(this);
    }
    

moveToDone(data){
    this.props.parentTodo(data);
     console.log('data iN movetoDone');
}

// moveToDone(inDoneData){
//     this.setState({userInfopro:[...this.state.userInfopro, inDoneData]})
//     console.log("moveToDonee",inDoneData);
// }
    
    
    render(){
        return(
            <div id="middlebox">
                <h1>In Progress</h1>

                {this.props.progressData.length ? 
                this.props.progressData.map((item=>
                    item.status === 'INPROGRESS'? <Card parentCall={this.moveToDone} data={item}/> : ''
                    )): null
                    }

                
            </div>
        )
    }
}

// export default InProgress