import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import { To1 } from './components.js'
"use strict";
/*figure out way to request some data from serv to prop */











class Container extends React.Component {
	constructor(prop){
		super(prop);
		this.state = {username:'',
		              password:'',
					  formData:'Login',
					  postData:'/Login',
										  
				}
		this.handleChange = this.handleChange.bind(this)
	}
    
   // Deal with server data keep reference for later on
    componentWillMount(){
		axios.get('http://127.0.0.1:3000/Data')
        .then(function (response) {
         console.log(response);
         })
		 }
	
	// Register vs Login option 
	handleChange(e){
		e.preventDefault();
		if (this.state.formData == 'Login'){
			this.setState({formData: 'Register',
			               postData:  '/Register'})
		} else {
			this.setState({formData: 'Login',
	                       postData: '/Login'
			})
			               
			}
		
		
	}
	
	/* add a removal component  ACCESS PAGE PAYLOAD*/
	
	handlEvent(){
		
		
	}
	
	render(){
		return(
		<form method = "POST" action = "/Login">
		<div>
		<section className="container">
		<div className="container-page">				
			<div className="col-md-6">
				<h3 className="dark-grey">{this.state.formData}</h3>
				
				<div className="form-group col-lg-12">
				
					<label>Usernameflakeeeeee</label>
					<input type="text" name="username" className="form-control"   />
				</div>
				
				<div className="form-group col-lg-6">
					<label>Password
						
	                     
					
					</label>
					<input type="password" name="password" className="form-control" />
				</div>
							<input type="submit" className="btn btn-primary" value = {this.state.formData} />
							<a href = "" onClick={this.handleChange}>Not registered? </a>
			</div>
		 <To1 />
			
		</div>
	</section>
		</div>
		</form>
		)
		
		
	}
	
	
}
const Prop = <Container insert= "gen insert" />






    ReactDOM.render(
    Prop,
	document.getElementById('app'),
);