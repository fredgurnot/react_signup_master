import React, {Component} from 'react';
import Footer from './footer';

//styles
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className={styles.app}>
        <div className="App">
        <Footer/>
      </div>
        
      </div>

    )
  }
}

export default App;