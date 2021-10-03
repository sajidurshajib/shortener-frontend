import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div className={classes.character}>
                <h2>
                    Demo Guy<span> - demo@gmail.com</span>
                </h2>
            </div>
        </div>
    )
}

export default Profile
