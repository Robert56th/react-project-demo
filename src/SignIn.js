const SignIn = () => {
    return ( 
        <card className="signin">
            <div className="content">
                <h1>Sign In</h1>
                
                <div className="label">
                    <label>Username</label>
                    <div className="input">
                        <input type={"text"}/>
                    </div>
                </div>
                
                <div className="label">
                    <label>Pasword</label>
                    <div className="input">
                        <input type={"password"}/>
                    </div>
                </div>
                

                <button>Submit</button>
            </div>
        </card>
     );
}
 
export default SignIn;