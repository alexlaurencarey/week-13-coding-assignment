import React from "react";

function Login() {
  return (
    <div>
      <h3>Login</h3>
      <div className="Login">
        <form>
          <div className="userName">
            <input type="text" name="username" value="username" />
          </div>
          <div className="password">
            <input type="text" name="pass" value="password" />
          </div>
          <div className="submit">
            <input type="button" name="log" id="log" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
