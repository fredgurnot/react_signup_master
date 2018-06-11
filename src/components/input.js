import React, { Component } from 'react';
import styles from './input.css';



export default class Input extends Component {

    state = {

    }

    handleEnterKey = evt => {
        if (evt.key === 'Enter') {
          this.props.handleSubmit(this.input.value);
        }
      };
      
    render() {
        return (
            <div className={styles.input__container}>
                <div className={styles.errorClass}>{this.props.errorMessage}</div>
                <input 
                    className={styles[this.props.classType]}
                    id={this.props.name}
                    autoComplete="false"
                    required
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onKeyUp={this.handleEnterKey}
                    onChange={this.props.handleChange}
                />
                <label htmlFor={this.props.name}></label>
            </div>
        );
}
}