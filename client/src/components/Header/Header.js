import React, { Component } from "react";
import LocButton from "../trackButton/trackButton"
import "./header.css"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Header extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    
    render() {
        const { user } = this.props.auth;
    
    return (
        <>

            <header id="heading">

                <nav className="nav-wrapper indigo darken-4" id="navbar">

                    <div className="container headingNavbar">
                        <LocButton />
                        <a href="/dashboard" className="flow-text" id="dashboardHeaderText">{this.props.date.toDateString()}</a>
                        <i onClick={this.onLogoutClick} id="loggingOUTid" class="material-icons logoutICON">exit_to_app</i>

                    </div>


                </nav>


            </header>

        </>

    );
}
}
// export default Header;

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Header);