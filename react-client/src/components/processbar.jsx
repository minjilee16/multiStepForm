import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';



class ProcessBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      stepIndex: 0
    };
  }


  render() {
    let processbar = <div style={{width: '100%', maxWidth: 700, margin: '2em auto', padding: '3em'}}>
        <Stepper activeStep={this.props.stepIndex}>
          <Step >
            <StepLabel style={{color: 'white'}} >ACCOUNT SETUP</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color: 'white'}}>SOCIAL PROFILES</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color: 'white'}}>PERSONAL DETAILS</StepLabel>
          </Step>
        </Stepper>
      </div>
    return (
      processbar
    );
  }
}

export default ProcessBar;