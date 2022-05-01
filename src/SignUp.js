const SignUp = () => {
  return (
    <card className="signin">
      <div className="content">
        <h1>Create Account</h1>

        <div className="label">
          <label>Username</label>
          <div className="input">
            <input type={"text"} />
          </div>
        </div>

        <div className="label">
          <label>Password</label>
          <div className="input">
            <input type={"password"} />
          </div>
        </div>

        <div className="label">
          <label>Confirm Password</label>
          <div className="input">
            <input type={"password"} />
          </div>
        </div>

        <button>Submit</button>
      </div>
    </card>
  );
};

export default SignUp;
