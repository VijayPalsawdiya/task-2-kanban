import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export class Form extends Component{
constructor(props) {
    super(props)

    this.state = {
        
        fields: {
            name: [],
            description: [],
            member: [],
        },
        errors: {},
        }
        // this.Addvalue = this.Addvalue.bind(this)
    
    this.handleChange = this.handleChange.bind(this)
}
handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }
         //Description
    if (!fields["description"]) {
        formIsValid = false;
        errors["description"] = "Cannot be empty";
      }
  
      if (typeof fields["description"] !== "undefined") {
        if (!fields["description"].match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["description"] = "Only letters";
        }
    }
    this.setState({ errors: errors });
    return formIsValid;
}

contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
        return alert("Form has errors.");
        
    }
    const task = {
        id : uuidv4(),
        // fields :  this.state.fields,
        name : this.state.fields.name,
        description : this.state.fields.description,
        member : this.state.fields.member,
        status: "TODO",
    }
    alert("Form submitted");

    this.props.parentCallback(task);
    console.log(task);
  }
 
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

    // Addvalue() {
        
    //     const task = {
    //         id : uuidv4(),
    //         fields :  this.state.fields,
    //         // name : this.state.name,
    //         // description : this.state.description,
    //         // member : this.state.member,
    //         status: "TODO",
    //     }

    //     this.props.parentCallback(task);
    //     // alert("form submitted", task);
    // }



    // onTrigger = (event) => {
    //     this.props.parentCallback(event.target.name.value);
    //     // this.props.parentCallback(event.target.description.value);
    //     // this.props.parentCallback(event.target.member.value);
    //     event.preventDefault();
    // }

    
    render(){
        return(
            <div className="App">
                        <form onSubmit={this.contactSubmit.bind(this)}>
                            <label htmlFor="name">Name: </label>
                            <input  type="text" id="name" value={this.state.fields["name"]} name="name" onChange={this.handleChange.bind(this, "name")} placeholder="Your name.." required/>
                            {/* <script>if(!name){alert("name")}</script> */}

                            <label htmlFor="description">Description: </label>
                            {/* <input type="textarea" id="description" value={this.state.description} name="description" onChange={e => this.setState({description:e.target.value})}  placeholder="Your last name.."/> */}
                            <textarea id="description" name="description" rows="4" cols="85" value={this.state.fields["description"]} name="description" onChange={this.handleChange.bind(this, "description")}  placeholder=".." required/>

                            <label htmlFor="member">Member: </label>
                            <select id="member" name="member" value={this.state.fields["value"]}  onChange={this.handleChange.bind(this, "member")} required>
                            <option value="">Select Member</option>
                            <option value="Raj" >Raj</option>
                            <option value="Hari">Hari</option>
                            <option value="Jay">Jay</option>
                            </select>
                        
                            <button className="mainbutton" type="submit" value="Submit" onClick={this.Addvalue}>Submit</button>
                        </form>
                    

            </div>
        )
    }
}

// export default Form