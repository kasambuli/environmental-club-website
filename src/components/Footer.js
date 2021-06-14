import Image from './Image'
import { Grid } from '@material-ui/core';
const Footer = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item md={3} xl={3} xs={12} sm={6}>
                    <img src="#" alt="logo" />LOGO
            </Grid>
                <Grid item md={3} xl={3} xs={12} sm={6}>
                    <ul>Quick Links
                <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                        <li>Link 4</li>
                    </ul>
                </Grid>
                <Grid item md={3} xl={3} xs={12} sm={6}>
                    <ul> Contact Us
                <li>Email</li>
                        <li>Location</li>
                        <li>Phone</li>
                    </ul>
                </Grid>
                <Grid item md={3} xl={3} xs={12} sm={6}>
                    <Grid container spacing={1}>
                        <p>Connect</p>
                        <Image src="https://via.placeholder.com/50" />
                        <Image src="https://via.placeholder.com/50" />
                        <Image src="https://via.placeholder.com/50" />
                        <Image src="https://via.placeholder.com/50" />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
