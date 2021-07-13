import React from "react";
import PropTypes from "prop-types";
import Confetti from "react-confetti";

class ConfettiComponent extends React.PureComponent {
    state = {
        animationDone: true
    };

    static propTypes = {
        size: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number
        })
    };

    componentDidMount() {
        setTimeout(() => {
            this.toggleConfetti();
        }, 1000000);
    }

    toggleConfetti = () => {
        this.setState({ animationDone: !this.state.animationDone });
    };

    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
            >
                <Confetti
                    gravity={0.4}
                    run={this.state.animationDone}
                    numberOfPieces={20}
                    {...this.props.size}
                />
            </div>
        );
    }
}

export default ConfettiComponent;