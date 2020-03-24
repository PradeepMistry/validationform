import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Form.css';

import { MdCancel } from "react-icons/md";
const initialState={
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        name:"",
        nameError:""
}
class Demo extends Component {
        constructor(props) {
                super(props);
                this.state = initialState;
        }
        handlename = (event) => {
                console.log(event.target.value);
                this.setState({ name: event.target.value })


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
                        alert('Name: Email : Role :Password is submitted');
                        this.setState(initialState);
                }
        }

        valid() {
                if (!this.state.email.includes("@") && this.state.name.length<3 && this.state.password.length < 8)
                 {
                        this.setState({ emailError: "Invalid email" ,nameError: "Name Atleast Contains 3 Characters",
                        passwordError: "Password is too short-Atleast 8 Characters must be there"})    

                }
                else if (this.state.name.length<3)
                 {
                        this.setState({ nameError: "Name Atleast Contains 3 Characters" })
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
                        <div class="shadow p-3 mb-5 bg-white rounded">
                        <form onSubmit={this.handlesubmit}>
                                <body>
                                        <form className="text-center">
                                        <div>
                                                
                                                <h2>VALIDATED LOGIN FORM</h2>
                                                <h4>Create Your Account. It takes few minutes.
                                        
                                                </h4>
                                                

                                                <div >{ this.state.nameError && <MdCancel color='red'/>
                                                                } <view><input type="text" class ="placeicon" placeholder=" &#xf007; Name" value={this.state.name}
                                                                onChange={this.handlename} />
                                                          <p style ={{fontSize:11.5,color:'red'}}>{this.state.nameError}</p> </view>    
                                                                </div>
                                                        <div>
                                                        <select className="d-block p-2 bg-dark text-white">
                                                          <option value="grapefruit">Computer Science</option>
                                                        <option value="lime">I.T</option>
                                                         <option selected value="coconut">Mechanics</option>
                                                         <option value="mango">Civil</option>
                                                         </select>         
                                                         </div>       
                                                               
                                                        <div>{
                                                                        this.state.emailError && <MdCancel color='red'/>
                                                                }  <input type="text" class ="placeicon" placeholder="&#xf003; Email" value={this.state.email}
                                                                onChange={this.handleemail} />
                                                               
                                                         
                                                        <p style ={{fontSize:11.5,color:'red'}}>{this.state.emailError}</p>
                                                        </div>
                                                       <div> {
                                                                    this.state.passwordError && <MdCancel color='red'/>    
                                                                }<input type="text" class ="placeicon" placeholder="&#xf023; Password" value={this.state.password}
                                                                onChange={this.handlepassword} />

                                                                
                                                                
                                                                <p style={{fontSize:11.5,color:'red'}}>{this.state.passwordError}</p></div>
                                                          <div className="submit">     
                                                        <input type="submit" value="Submit" /></div> 

                                                
                                              </div>
                                        </form>
                                </body>
                        </form>
                </div>
                )

        }
}
export default Demo;
