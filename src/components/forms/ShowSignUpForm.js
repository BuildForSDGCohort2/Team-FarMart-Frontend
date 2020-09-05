import React from 'react';
import { Link } from 'react-router-dom';


const ShowSignUpForm =()=>{
    return(
        <div>
                    <div className="signup-form">	
    <form action="" method="post">
		<h2>Create Account</h2>
		<p className="lead">It's free and hardly takes more than 30 seconds.</p>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
				<input type="email" className="form-control" name="email" placeholder="Email Address" required="required"/>
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock"></i></span>
				<input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon">
					<i className="fa fa-lock"></i>
					<i className="fa fa-check"></i>
				</span>
				<input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
			</div>
        </div>        
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
		<p className="small text-center">By clicking the Sign Up button, you agree to our <br/><Link to=''>Terms &amp; Conditions</Link>, and <Link to=''>Privacy Policy</Link>.</p>
    </form>
	<div className="text-center">Already have an account? <Link to='/login'>Login here</Link>.</div>
</div>
        </div>
    )
}
export default ShowSignUpForm;