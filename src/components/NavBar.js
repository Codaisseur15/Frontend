import React, { PureComponent } from "react";
import "./NavBar.css";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { logout } from "../actions/users";



class NavBar extends PureComponent {


  // handleLogout = () => {
  //   console.log("logout");
  //   this.props.logout();
  // };

  render() {
    return (
      <nav>
        <div class="nav-wrapper red">
          <a href="#" class="brand-logo"><i class="material-icons">create</i>Codaisseur</a>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/login">Login</a></li>
            <li><a href="/Quizcreator">Create Quiz</a></li>
            <li><a href="/student_quiz_result">Students Results</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

// <ul class="right">
//   <li onClick={this.handleLogout}><a href="/login"><i class="material-icons">exit_to_app</i></a>
//   </li>
// </ul>

// const mapStateToProps = ({ currentUser }) => ({ currentUser });
// export default connect(mapStateToProps, { logout })(NavBar);

export default NavBar
