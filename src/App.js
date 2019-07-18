import React, { Component } from 'react';
import { Buttons, Alerts, Accordians, Badges, Breadcumbs, ButtonGroups, Cards, Navs, TabComponent, TooltipsComponent, Spinners, Tables, Modals } from './components/bootstrap-component'

class App extends Component {
  state = {
    isLoading: false,
    loadingId: '',
    selectId: ''
  }

  setSelectId = (selectId) => {
    console.log(this.state.selectId);
    this.setState({
      selectId
    })
  }
  render() {
    const handleLoading = (loadingId) => {
      this.setState(
        ({ isLoading }) =>
          ({
            isLoading: !isLoading,
            loadingId: Number(loadingId),
            selectId: ''
          })
      )
      console.log(loadingId);
    }
    const dispNone = {
      display: 'none'
    }
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
    const { isLoading, loadingId, selectId } = this.state;
    const { setSelectId } = this;
    return (
      <div>
        <h1></h1>
        <div style={dispNone}>
          <Buttons defaultStyles={defaultStyles} defaultOutLineStyles={defaultOutLineStyles} isLoading={isLoading} handleLoading={handleLoading} loadingId={loadingId} />
        </div>
        <div style={dispNone}>
          <Alerts defaultStyles={defaultStyles} />
        </div>
        <div style={dispNone}>
          <Accordians />
        </div>
        <div style={dispNone}>
          <Badges />
        </div>
        <div style={dispNone}>
          <Breadcumbs />
        </div>
        <div style={dispNone}>
          <ButtonGroups />
        </div>
        <div style={dispNone}>
          <Cards />
        </div>
        <div style={dispNone}>
          <Navs selectId={selectId} setSelectId={setSelectId} />
        </div>
        <div style={dispNone}>
          <TabComponent />
        </div>
        <div style={dispNone}>
          <TooltipsComponent />
        </div>
        <div >
          <Spinners />
        </div>
        <div>
          <Tables />
        </div>
        <div>
          <Modals />
        </div>
      </div>
    );
  }
}

export default App;