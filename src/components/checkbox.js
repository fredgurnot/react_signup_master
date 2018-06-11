import React, { Component } from 'react';
import styles from "./checkbox.css"


export default class Checkbox extends Component {

    static defaultProps = {
        checked: true
      };

      state = {
        checked: this.props.checked,
      };

    render() {
        const { checkboxHandler, ...rest } = this.props;
    
        return (
          <input className={styles.checkbox}
            {...rest}
            type="checkbox"
            checked={this.state.checked}
            onChange={() => {
              if (this.props.checkboxHandler) {
                this.props.checkboxHandler();
              }
              this.setState({
                checked: !this.state.checked,
              });
            }}
          />
        );
      }
    
}