import Image from './Image'
import { Grid } from '@material-ui/core';
import Buttons from './Buttons'
const Section = ({ title, content, text, src }) => {
    return (
        <div>
            <Grid container spacing={1}>
            <Grid item md={6} xl={3} xs={12} sm={6}>
                <Image src={src} />
                </Grid>
                <Grid item md={6} xl={3} xs={12} sm={6}>
                    <h4>{title}</h4>
                    <p>{content}</p>
                    <Buttons text={text} />
                </Grid>
            </Grid>

        </div>
    )
}

export default Section
