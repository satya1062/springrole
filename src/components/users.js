import React, { Component } from 'react';
import TableRow from './TableRow';
import userData from './user.json'
import './page.css';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {users: [],currentPage: 1,
          usersPerPage: 5};
	   this.handleClick = this.handleClick.bind(this);
	   this.filterList = this.filterList.bind(this);
	   this.sortTable = this.sortTable.bind(this);
    }
    componentDidMount(){
      
          this.setState({ users: userData });
    }
	handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
	  filterList(event) {
   var updatedList = userData;
   var filtValue = event.target.value;
	updatedList = updatedList.filter((user) => {
      let userName = user.first_name.toLowerCase()
      return userName.indexOf(
        filtValue.toLowerCase()) !== -1
    })
    this.setState({ users: updatedList });
  }
    tabRow(){
      return this.state.users.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("dtBasicExample");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

	
    render() {
		 const { users, currentPage, usersPerPage } = this.state;
		  // Logic for displaying current users
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

        const renderUsers = currentUsers.map((object, i) => {
          return <TableRow obj={object} key={i} />;
        });
		
		// Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });
		
      return (
        <div>
          <h3 align="center">User List</h3>
		  <div className="col-lg-4">
		  <form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Filter By First Name" onChange={this.filterList}/>
        </fieldset>
        </form>
		</div>
		  <div className="col-lg-12">
		  <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th onClick={() => this.sortTable(0)}>First Name</th>
                <th onClick={() => this.sortTable(1)}>Last Name</th>
                <th onClick={() => this.sortTable(2)}>Company Name</th>
				<th onClick={() => this.sortTable(3)}>City</th>
                <th onClick={() => this.sortTable(4)}>State</th>
                <th onClick={() => this.sortTable(5)}>Zip</th>
				<th onClick={() => this.sortTable(6)}>Email</th>
                <th onClick={() => this.sortTable(7)}>Web</th>
                <th onClick={() => this.sortTable(8)}>Age</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { renderUsers }
            </tbody>
          </table>
		  </div>
		  <div className="col-lg-4">
		  <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
			</div>
        </div>
      );
    }
  }
