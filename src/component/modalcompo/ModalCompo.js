import React, { Component } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


import {Form} from '../form';
import {InProgress} from '../inprogress';
import {Todo} from '../todo';
import {Done} from '../done';



export class ModalCompo extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            openModal : false,
            userInfo : []
        }
        this.childTodo = this.childTodo.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
        // this.childData = this.childData.bind(this),
        this.moveToDonee = this.moveToDonee.bind(this);
    }
    

    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }
    
    handleCallback = (childData) =>{
        this.setState({userInfo:[...this.state.userInfo, childData]})
        this.setState({openModal : false})
        console.log("ChildData",childData);
        document.getElementById("leftbox").style.backgroundColor = "lightblue";

    }
    
    childTodo(inProgressData){
        const inprogressdata = this.state.userInfo.filter(obj => inProgressData.id !== obj.id)
        this.setState({userInfo:[...inprogressdata, inProgressData]})
        console.log("Child Todo",inProgressData);
        document.getElementById("leftbox").style.backgroundColor = "blue";
    }


    moveToDonee(inDoneData){
        const indonedata = this.state.userInfo.filter(obj => inDoneData.id !== obj.id)
        this.setState({userInfo:[...indonedata, inDoneData]})
        console.log(" Data in moveToDonee",inDoneData);
        document.getElementById("middlebox").style.backgroundColor = "grey";
    }

    childData(end){
        this.setState({userInfo:[...this.state.userInfo, end]})
        console.log("Data in childData",end);
        document.getElementById("rightbox").style.backgroundColor = "green";
    }

    render() {
        return (
                <div className="App">
                <button className="mainbutton" onClick={this.onClickButton}>Create Task</button>
                    <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                        <h1>Task</h1>
                        <Form parentCallback = {this.handleCallback}/>
                    </Modal>
                    <div>

                        <Todo  parentTodo={this.childTodo} newData={this.state.userInfo.filter((item)=>item.status === "TODO")}/>
                        <InProgress parentTodo={this.moveToDonee} progressData={this.state.userInfo.filter((item)=>item.status === "INPROGRESS")}/>
                        <Done parentTodo={this.childData} doneData={this.state.userInfo.filter((item)=>item.status === "DONE")}/>
                    </div>
                </div>     
       )
    }  
}

// export default ModalCompo