import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { logout } from "../actions/users";



class NavBar extends PureComponent {

  render() {
    return (
      <nav>
        <div class="nav-wrapper red">
          <a href="#" class="brand-logo"><i class="material-icons">create</i>Codaisseur | Teachers</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            { this.props.currentUser && <li>Welcome {this.props.currentUser}</li>}
            { !this.props.currentUser && <li><a href="/login">Login</a></li>}
            { this.props.currentUser && <li><a href="/logout">Logout</a></li>}
            <li><a href="/Quizcreator">Create Quiz</a></li>
            <li><a href="/student_quiz_result">Students Results</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}


const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser
	}
}
export default connect(mapStateToProps, { logout })(NavBar);
