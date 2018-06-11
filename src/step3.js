
import React, { Component } from 'react';

import styles from './footer.css'


export default class Step3 extends Component {

    render() {
        if (this.props.currentStep !== 3) {
            return null;
          } 
          
        return(
            <div className={styles.task}>
                <div className={styles.task__title__end}>Thank You For Signing Up!</div>
                <div className={styles.fields__container}>
                    <div className={styles.task_message_end}>
                    Look out for the latest news on your favorite shows.
                    </div>
                </div>
                
                
            </div>

                );
            }

}