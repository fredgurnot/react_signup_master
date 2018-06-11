
import React, { Component } from 'react';
import Input from './components/input';
import Button from './components/button';

import styles from './footer.css'


export default class Step2 extends Component {

    render() {
        if (this.props.currentStep !== 2) {
            return null;
          } 
          
        return(
            <div className={styles.task}>
                <div className={styles.task__title}>Almost Done! Please Enter Your First and Last Name.</div>
                <div className={styles.fields__container}>
                    <Input 
                    classType="input__name"
                    placeholder="First Name"
                    type="text"
                    handleChange={this.props.handleFistNameChange}
                    errorMessage={this.props.errorMessageFirstName}
                    />
                    <Input 
                    classType="input__name"
                    placeholder="Last Name"
                    type="text"
                    handleChange={this.props.handleLastNameChange}
                    errorMessage={this.props.errorMessageLastname}
                    />
                    <Button className={styles.button__container}
                        name="sign up"
                        handleSubmit={this.props.handleSubmit}
                />
                </div>
                
                
            </div>

                );
            }

}