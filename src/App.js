import React, { Component } from 'react';
import { Buttons, Alerts } from './components/bootstrap-component'

class App extends Component {

  render() {
    const defaultStyles = [
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
      'info',
      'light',
      'dark',
      'link'
    ]
    const defaultOutLineStyles = [
      'outline-primary',
      'outline-secondary',
      'outline-success',
      'outline-warning',
      'outline-danger',
      'outline-info',
      'outline-light',
      'outline-dark',
      'outline-link'
    ]
    return (
      <div>
        <h1>Buttons</h1>
        <div>
          <Buttons defaultStyles={defaultStyles} defaultOutLineStyles={defaultOutLineStyles} />
        </div>
        <div>
          <Alerts defaultStyles={defaultStyles} />
        </div>
      </div>
    );
  }
}

export default App;