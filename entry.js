import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import { To1 } from './components.js'
"use strict";
/*figure out way to request some data from serv to prop */











class Container extends React.Component {
	constructor(prop){
		super(prop);
		this.state = {username:'sup broooooooooo'
										  
				}
	}
    
   
   componentDidMount(){
	   
	   
	   
   }
   
   
   
    
	
	/* add a removal component  ACCESS PAGE PAYLOAD*/
	
	
	
	
	render(){
		return(
		<div>
		<section className="container">
		<div className="container-page">				
			<div className="col-md-6">
				<h3 className="dark-grey">Login</h3>
				
				<div className="form-group col-lg-12">
				
					<label>Username</label>{this.state.username}
					
					<input type="text" name="user" className="form-control" name="username" value="" />
				</div>
				
				<div className="form-group col-lg-6">
					<label>Password </label>
					<input type="password" name="pass" className="form-control" name="password" value="" />
				</div>
							<button type="submit" className="btn btn-primary">Register</button>
							<a href="/Register">Already logged in? </a>
			</div>
		 <To1 />
			
		</div>
	</section>
		</div>
		)
		
		
	}
	
	
}
const Prop = <Container insert= "gen insert" />






    ReactDOM.render(
    Prop,
	document.getElementById('app'),
);