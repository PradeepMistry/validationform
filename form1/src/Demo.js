import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MdCancel } from "react-icons/md";
const initialState={
        email: "",
        password: "",
        emailError: "",
        passwordError: ""
}
class Demo extends Component {
        constructor(props) {
                super(props);
                this.state = initialState;
        }
        handleemail = (event) => {
                console.log(event.target.value);
                this.setState({ email: event.target.value })

        }
        handlepassword = (event) => {
                console.log(event.target.value);
                this.setState({ password: event.target.value })

        }
        handlesubmit = (event) => {
                event.preventDefault();
                if (this.valid()) {
                        alert('Email : Password is submitted');
                        this.setState(initialState);
                }
        }

        valid() {
                if (!this.state.email.includes("@") && this.state.password.length < 8) {
                        this.setState({ emailError: "Invalid email", passwordError: "Password is too short-Atleast 8 Character must be there" })    

                }
                else if (!this.state.email.includes("")) {
                        this.setState({ emailError: "Email Required" })

                }
                else if (!this.state.email.includes("@")) {
                        this.setState({ emailError: "Invalid Email" })
                }
                else if (this.state.password.length < 8) {
                        this.setState({ passwordError: "Password is too short-Atleast 8 Character must be there" })
                }
                else if (this.state.password.search(/[0-9]/) < 0) {
                        this.setState({ passwordError: "Must contain atleast one numeric Ex. 0,3" });
                }
                else if (this.state.password.search(/^[A-Z]/)) {
                        this.setState({ passwordError: "Must contain atleast one Uppercase at the starting letter Ex. A,K" });
                }
                else {
                        return( true )   
                
                }
        }

        render() {

                return (
                        <form onSubmit={this.handlesubmit}>
                                <body>
                                        <div>
                                                
                                                <h1>VALIDATED LOGIN FORM</h1>
                                                

                                                        <div><label>Email:</label>{
                                                                        this.state.emailError && <MdCancel color='red'/>
                                                                }  <input type="text" placeholder="Enter valid Email*" value={this.state.email}
                                                                onChange={this.handleemail} />
                                                               
                                                                </div>
                                                        <p style ={{fontSize:20,color:'red'}}>{this.state.emailError}</p><br />
                                                       <div> <label>Password:</label> {
                                                                    this.state.passwordError && <MdCancel color='red'/>    
                                                                }<input type="text" placeholder="Enter password*" value={this.state.password}
                                                                onChange={this.handlepassword} />
                                                                
                                                                
                                                                <p style={{fontSize:20,color:'red'}}>{this.state.passwordError}</p><br /></div>
                                                        <input type="submit" value="Submit" />

                                                
                                        </div>
                                </body>
                        </form>
                )

        }
}
export default Demo;