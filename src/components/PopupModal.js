import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { DialogActions, DialogContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        height: '50vh',
        width: '90vw',
        overflowY: 'hidden',
        marginTop: '10rem',
        marginLeft: '1.2rem',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: 'inherit'
    },
    content: {
        height: '31vh'
    }
}));

const PopupModal = (props) => {
    const { openModal } = props;
    const classes = useStyles();

    const handleClose = () => {
        props.setModal(false)
    };

    return (
        <Modal
            className={classes.modal}
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={openModal}>
                <div className={classes.paper}>
                    <DialogActions style={{ justifyContent: 'space-between' }}>
                        <h2 id="transition-modal-title">{props.data.name}</h2>
                        <Typography variant='h5' onClick={handleClose}>
                            &times;
                        </Typography>
                    </DialogActions>
                    <DialogContent className={classes.content}>
                        <Typography>{props.data.description}</Typography>
                    </DialogContent>
                </div>
            </Fade>
        </Modal>
    );
}

export default PopupModal;