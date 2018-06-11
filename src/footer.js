import React, { Component } from 'react';
import Step1 from "./step1"
import Step2 from "./step2"

import styles from './footer.css'


const title = {
    initial: 'join the list',
    success: 'congratualtions'
  };

  const messages = {
    invalidEmail: 'Invalid email address. Please re-enter.',
    requiredField: 'This field is required',
    
  };

  const emailReg = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export default class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            errorMessage: "",
            errorMessageFirstName: "",
            errorMessageLastName: "",
            emailValue: "",
            firstName: "",
            lastName: "",
            agreeChecked: true,
            emailFailure: false,
            nameFailure: false,
            success: false
        };

      this.handleAgree = this.handleAgree.bind(this);
      this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp = () => {
        if ((this.state.firstName !== "") && (this.state.lastName !== "")) {
            //submit name
        }
        if (this.state.firstName === "") {
            this.setState({
                errorMessageFirstName: messages.requiredField,
            });
        }
        if (this.state.lastName === "") {
            this.setState({
                errorMessageLastName: messages.requiredField,
            });
        }
    }
    
      handleAgree = () => {
        this.setState({
            agreeChecked: !this.state.agreeChecked,
        });
      };

      handleEmailChange = (e) => {
          let newValue = e.target.value;
        this.setState({
            emailValue: newValue,
            emailFailure: false,
        });
      }

      handleFistNameChange = (e) => {
        let newValue = e.target.value;
        this.setState({
            firstName: newValue,
           nameFailure: false,
        });
        }

        handleLastNameChange = (e) => {
            let newValue = e.target.value;
            this.setState({
                lastName: newValue,
                nameFailure: false,
            });
            }

      handleEmailSubmit = () => {
          
            let emailFailure = !emailReg.test(this.state.emailValue);
            let message = messages.requiredField;
            if (this.state.emailValue !== "") {
                message = messages.invalidEmail;
            }

            if (emailFailure) {
                this.setState({
                emailFailure,
                errorMessage: message,
                });
                return;
            } else {
                //submit email
                this.setState({
                    errorMessage: "",
                    currentStep: 2,
                });
                
            }
        }


        render() {
            return(
                <div className={styles.footer}>
                <div className={styles.title}>{this.state.success ? title.success : title.initial}</div>
                <Step1 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleEmailChange}
                    errorMessage={this.state.errorMessage}
                    handleSubmit={this.handleEmailSubmit}
                />
                <Step2 
                    currentStep={this.state.currentStep}
                    handleFistNameChange={this.handleFistNameChange}
                    handleLastNameChange={this.handleLastNameChange}
                    errorMessageFirstName={this.state.errorMessageFirstName}
                    errorMessageLastname={this.state.errorMessageLastname}
                    handleSubmit={this.handleSignUp}
                />
                

                
        
            </div>
            );
          }


    }
