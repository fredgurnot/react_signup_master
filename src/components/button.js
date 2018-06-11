import React, {Component} from 'react';
import styles from './button.css';

export default class Button extends Component {

    render () {
        return (
            <div className={styles.button__container}
                onClick={this.props.handleSubmit}
                >
                {this.props.name}
            </div>
        );
    }
}