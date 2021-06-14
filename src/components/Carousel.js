import Image from './Image'
import { Grid } from '@material-ui/core';

const Carousel = ({ src, content }) => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item md={6} xl={3} xs={12} sm={6}>
                    <Image src={src} />
                </Grid>
                <Grid item md={6} xl={3} xs={12} sm={6}>
                    <p>{content}</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Carousel
