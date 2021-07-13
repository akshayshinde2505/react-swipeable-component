import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { Button, IconButton, Typography } from '@material-ui/core';
import { styles } from "../styles/CardContentStyle";
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PopupModal from './PopupModal';

function CardContentComponent(props) {
    const { classes, data } = props;

    return (
        <div className={classes.card}>
            <img src={data.img} alt="John" style={{ width: "100%", height: '27vh' }} />
            <Typography variant='h5' style={{ fontWeight: 'bold', fontFamily: 'arial' }}>{data.name}</Typography>
            <Typography className={classes.title}>{data.designation}</Typography>
            <div>
                <IconButton href="#"><LanguageIcon /></IconButton>
                <IconButton href="#"><FacebookIcon /></IconButton>
                <IconButton href="#"><InstagramIcon /></IconButton>
                <IconButton href="#"><TwitterIcon /></IconButton>
            </div>
            <Button
                className={classes.button}
                onClick={() => props.setModal(true)}
            >Know More</Button>
            {
                props.openModal && <PopupModal
                    openModal={props.openModal}
                    setModal={props.setModal}
                    data={data}
                />
            }
        </div>
    );
};


CardContentComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CardContentComponent)