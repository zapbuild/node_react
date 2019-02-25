import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
class Profile extends Component {
  // onLogoutClick = e => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };
  componentDidMount() {
  }
render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <h1> Profile </h1>
        <div className="row">
          <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input

                  value={user.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  value={user.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button style={{width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem"}} type="submit"className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                > Update </button>
                <Link to="/dashboard" style={{  marginLeft: "2rem", width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem"}} type="submit" className="btn btn-large waves-effect waves-light hoverable blue accent-3"> Cancel
                </Link>
              </div>
            </form>
        </div>
      </div>
    );
  }
}
Profile.propTypes = {
  // logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// export default Profile;
export default connect( mapStateToProps )( Profile );