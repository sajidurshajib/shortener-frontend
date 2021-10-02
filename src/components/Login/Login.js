import classes from './Login.module.css'

const Login = () => {
    return (
        <div className={classes.Login}>
            <div className={classes.wrapper}>
                <h2>Login</h2>
                <form>
                    <div className={classes.inputWrapper}>
                        <input type="text" />
                        <label>Username</label>
                    </div>
                    <div className={classes.inputWrapper}>
                        <input type="password" />
                        <label>Password</label>
                    </div>
                    <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
