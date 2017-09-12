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
    // finished: false,
    stepIndex: 0
    };
  }
  



  render() {

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={this.state.stepIndex}>
          <Step>
            <StepLabel>ACCOUNT SETUP</StepLabel>
          </Step>
          <Step>
            <StepLabel>SOCIAL PROFILES</StepLabel>
          </Step>
          <Step>
            <StepLabel>PERSONAL DETAILS</StepLabel>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default ProcessBar;