import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {

  constructor(props) {
        super(props);
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.first_name}
          </td>
          <td>
            {this.props.obj.last_name}
          </td>
          <td>
            {this.props.obj.company_name}
          </td>
		  <td>
            {this.props.obj.city}
          </td>
          <td>
            {this.props.obj.state}
          </td>
          <td>
            {this.props.obj.zip}
          </td>
		  <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.web}
          </td>
          <td>
            {this.props.obj.age}
          </td>
          <td>
            <Link to={"/user/"+this.props.obj.id} className="btn btn-primary">View</Link>
          </td>
        </tr>
    );
  }
}

export default TableRow;