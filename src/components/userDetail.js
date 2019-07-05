import React, { Component } from 'react';
import userData from './user.json'

var editObj = {};
export default class View extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }

  componentDidMount() {
	  
    }

  back() {
    
    this.props.history.push('/');
  }
 
  render() {
	  var propId = this.props.match.params.id;
      //alert(propId);
		  userData.map(function(object, i){
          if(object.id == propId){
			  //alert(object.first_name);
			  editObj = object;
		  }
      });
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">{editObj.first_name} {editObj.last_name}</h3>
			 <div className="form-group">
				<button onClick={this.back} className="btn btn-primary">
  Back
</button>
                </div>
            <form>
                <div className="form-group row col-lg-12">
				<div className="col-lg-6">
                    <label>First Name</label>
					</div>
					<div className="col-lg-6">
					<label>{editObj.first_name}</label>
					</div>
                </div>
                <div className="form-group row col-lg-12">
				<div className="col-lg-6">
                    <label>Last Name</label>
					</div>
					<div className="col-lg-6">
					<label>{editObj.last_name}</label>
					</div>
                </div>
                <div className="form-group row col-lg-12">
				<div className="col-lg-6">
                    <label>Company Name</label>
					</div>
					<div className="col-lg-6">
					<label>{editObj.company_name}</label>
					</div>
                </div>
				<div className="form-group row col-lg-12">
				<div className="col-lg-6">
                    <label>City</label>
					</div>
					<div className="col-lg-6">
					<label>{editObj.city}</label>
					</div>
                </div>
				<div className="form-group row col-lg-12">
				<div className="col-lg-6">
                    <label>State</label>
					</div>
					<div className="col-lg-6">
					<label>{editObj.state}</label>
					</div>
                </div>
				<div className="form-group row col-lg-12">
				<div className="col-lg-6">
                    <label>ZIP</label>
					</div>
					<div className="col-lg-6">
					<label>{editObj.zip}</label>
					</div>
                </div>
				<div className="form-group row col-lg-12">
				<div className="col-lg-6">
                    <label>E-Mail</label>
					</div>
					<div className="col-lg-6">
					<label>{editObj.email}</label>
					</div>
                </div>
				<div className="form-group row col-lg-12">
				<div className="col-lg-6">
                    <label>Web</label>
					</div>
					<div className="col-lg-6">
					<label>{editObj.web}</label>
					</div>
                </div>
				<div className="form-group row col-lg-12">
				<div className="col-lg-6">
                    <label>Age</label>
					</div>
					<div className="col-lg-6">
					<label>{editObj.age}</label>
					</div>
                </div>
               
            </form>
        </div>
    )
  }
}