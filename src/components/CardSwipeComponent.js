import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
// import { useHistory } from "react-router-dom";
import { styles } from "../styles/CardSwipeStyple";
import { Typography } from '@material-ui/core';
import CardContentComponent from './CardContentComponent';
import PopupModal from './PopupModal';


function CardSwipeComponent(props) {
    const { classes, resumeList } = props;
    let styleSheet = document.styleSheets[0];
    let animationName = 'swipe-animation';
    let flickAnimation =
        props.swipedir === 'right' ?
            `@-webkit-keyframes ${animationName} {
                0%   {left:0px; top:100px; transform: rotate(20deg);}
                50%  {left:200px; top:200px; transform: rotate(40deg);}
                75%  {left:300px; top:300px; transform: rotate(50deg);}
                100%  {left:400px; top:400px; transform: rotate(60deg);}
        }` :
            `@-webkit-keyframes ${animationName} {
            0%   {right:0px; top:100px; transform: rotate(-20deg);}
            50%  {right:200px; top:200px; transform: rotate(-40deg);}
            75%  {right:300px; top:300px; transform: rotate(-50deg);}
            100%  {right:400px; top:400px; transform: rotate(-60deg);}
        }`;

    styleSheet.insertRule(flickAnimation, styleSheet.cssRules.length);

    const newStyle =
        (props.swipedir === 'right' || props.swipedir === 'left')
            ? {
                animationName: animationName,
                animationTimingFunction: 'linear',
                animationDuration: '0.5s',
                // animationDelay: '2s',
                animationIterationCount: 1,

            } : {
                // backgroundColor: this.state.backgroundColor,
                left: props.startX - 150,
                top: props.startY - 250,
            };

    let count = props.currentIndex + 1;
    let temp = props.resumeList.length - 1;
    let nextIndex = count > temp ? 0 : count;

    return (
        <div className={classes.card__container}
            // style={(props.requestLoading || props.requestVideoLoading) ? { opacity: 0.5, pointerEvents: "none", height: '100%' } : { height: '100%' }}
            data-testid='candidate-card-container'
        >
            <div
                className={classes.card_shadow}
                key='shadow1'
                style={{ marginTop: '1rem', marginLeft: '2rem' }}
            >
                <CardContentComponent
                    data={props.resumeList[nextIndex]}
                />
            </div>
            <div
                className={classes.card_shadow}
                key='shadow2'
                style={{ marginTop: '0.5rem', marginLeft: '1rem' }}
            >
                <CardContentComponent
                    data={props.resumeList[nextIndex]}
                />
            </div>
            <div
                className={classes.card}
                // key={nextJD.resumeId}
                style={newStyle}
                data-testid='job-card-display'
            >
                {/* <h4>Card Content</h4> */}
                {/* <Typography className={classes.card_title_txt}> */}
                {/* {props.resumeList[props.currentIndex].name} = {props.currentIndex}</Typography> */}
                <CardContentComponent
                    data={props.resumeList[props.currentIndex]}
                    setModal={props.setModal}
                    openModal={props.openModal}
                />
            </div>

        </div>
    );
}


CardSwipeComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CardSwipeComponent)