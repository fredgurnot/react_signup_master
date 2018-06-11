
import React, { Component } from 'react';
import Input from './components/input';
import Checkbox from './components/checkbox';
import Button from './components/button';

import styles from './footer.css'


export default class Step1 extends Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null;
          } 
          
        return(
            <div className={styles.task}>
                <div className={styles.task__title}>SIGN UP FOR THE TLC NEWSLETTER.</div>
                <div className={styles.fields__container}>
                    <Input 
                    classType="input__email"
                    placeholder="enter email address"
                    type="email"
                    handleChange={this.props.handleChange}
                    errorMessage={this.props.errorMessage}
                    handleSubmit={this.props.handleSubmit}
                    />
                    <Button className={styles.button__container}
                        name="next"
                        handleSubmit={this.props.handleSubmit}
                />
                </div>
                
                <div className={styles.legal}>
                    
                    <Checkbox className={styles.legal__checkbox}
                    checkboxHandler={this.props.handleAgree}/>
                    <div className={styles.legal__copy}>I agree to receive information from Discovery Communications in accordance with the following Privacy Policy</div>
                </div>
            </div>

                );
            }

}