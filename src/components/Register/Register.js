import classes from './Register.module.css'

const Register = () => {
    return (
        <div className={classes.Register}>
            <div className={classes.wrapper}>
                <h2>Register</h2>
                <form>
                    <div className={classes.inputWrapper}>
                        <input type="email" />
                        <label>Email</label>
                    </div>
                    <div className={classes.inputWrapper}>
                        <input type="text" />
                        <label>Username</label>
                    </div>
                    <div className={classes.inputWrapper}>
                        <input type="password" />
                        <label>Password</label>
                    </div>
                    <div className={classes.inputWrapper}>
                        <input type="password" />
                        <label>Confirm Password</label>
                    </div>
                    <button>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Register
