import React, { Component } from 'react'

export class Card extends Component{
    constructor(props) {
        super(props)

        var today = new Date(),
         date = today.getDate() + ':' + today.getMonth()  + ':' + today.getFullYear(),
         time = today.getHours() + ':' + today.getMinutes()  + ':' + today.getSeconds();   
        
        this.state = {
             currentTime: time,
             currentDate: date,
        }
        this.sentProg = this.sentProg.bind(this);        
    }


    sentProg() {
        const inpro = {
            id : this.props.data.id,
            name : this.props.data.name,
            description : this.props.data.description,
            member : this.props.data.member,
            currentDate: this.props.data.currentDate,
            currentTime: this.props.data.currentTime,
            
            status: "INPROGRESS",    
        }
        this.props.parentCall(inpro);
        document.getElementById("middlebox").style.backgroundColor = "lightgrey";
    }
      

    sentDone() {
        const inpro = {
            id : this.props.data.id,
            name : this.props.data.name,
            description : this.props.data.description,
            member : this.props.data.member,
            currentDate: this.props.data.currentDate,
            currentTime: this.props.data.currentTime,
            status: "DONE",
        }
        this.props.parentCall(inpro);
        document.getElementById("rightbox").style.backgroundColor = "lightgreen";

    }

        
    render(){
        
        // const {name,description,member} = this.state;
        // const {parentCallback} = this.handleCallback;
        return(
            <div className="App">
                <div className="card">
                {/* <Form parentCallback = {this.handleCallback}/> */}
                    <h4><b>Name:  </b>{this.props.data.name}</h4>
                    <p><b>Description: </b> {this.props.data.description}</p>
                    <p><b>Member:</b> <span>{this.props.data.member}</span></p>
                    <p className="dateandtime"><b>Date: </b>{this.state.currentDate} <i>Time:</i> {this.state.currentTime}</p>
                    <p>
                        {this.props.data.status === 'TODO' && 
                        
                    <button onClick={this.sentProg.bind(this)}> PROGRESS </button>}
                    </p>

                    <p>
                        {this.props.data.status === 'INPROGRESS' && 

                    <button onClick={this.sentDone.bind(this)}> DONE </button>}
                    </p>

                </div>
            </div>
        )
    }
}
// export default Card