import React from "react";
import { Link } from "react-router-dom";

const ShowLoginForm = () => {
  return (
    
      <div  className="modal ">
        <div className="modal-dialog modal-login modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Login</h4>
             
            </div>
            <div className="modal-body">
              <form action="" method="post">
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Username"
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                  >
                    Sign In
                  </button>
                </div>
                <p className="hint-text">
                  <Link to="">Forgot Password?</Link>
                </p>
              </form>
            </div>
            <div className="modal-footer">
              Don't have an account? <Link to="sign-up">Create one</Link>
            </div>
          </div>
        </div>
      </div>
  );
};
export default ShowLoginForm;
