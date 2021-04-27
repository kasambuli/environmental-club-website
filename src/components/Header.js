import Button from './Button'
const Header = () => {
    return (
        <div className="navbar">
            <img src="https://via.placeholder.com/150" alt="logo" />
            <nav className="navbar navbar-dark bg-dark mb-3">
                <ul>
                    <li>About</li>
                    <li>Programmes</li>
                    <li>Cohorts</li>
                    <li>Gallery</li>
                </ul>
                <Button text="Sign In" />
                <Button text="Register" />
            </nav>
        </div>
    )
}

export default Header
