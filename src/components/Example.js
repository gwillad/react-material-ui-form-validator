import React from 'react';
import PropTypes from 'prop-types';
import { PrismCode } from 'react-prism';
import FlatButton from 'material-ui/FlatButton';

const getStyle = (open) => {
    if (open) {
        return { display: 'block' };
    }
    return { display: 'none' };
};

const styles = {
    button: {
        float: 'right',
    },
    container: {
        clear: 'both',
    },
};

class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };

        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { children, ...rest } = this.props;
        const style = getStyle(this.state.open);
        return (
            <div>
                <FlatButton style={styles.button} onClick={this.toggleState} label="Show code" />
                <div style={{ ...styles.container, ...style }}>
                    <PrismCode {...rest}>{children}</PrismCode>
                </div>
            </div>
        );
    }

}

Example.propTypes = {
    children: PropTypes.any,
};

export default Example;
