import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import PasswordField from 'material-ui-password-field';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class inputTextFillBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dataSource1: [],
      dataSource2: [],
      dataSource3: [],
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      modal: false,
      open: false
    }
  }

  updateSecondStepState () {
    this.setState({
      stepTwo: !this.state.stepTwo,
      stepOne: !this.state.stepOne,
      dataSource: []
    })
    this.props.next();
  }

  movePrevioustoFirstStep () {
    this.setState({
      stepTwo: !this.state.stepTwo,
      stepOne: !this.state.stepOne
    })
    this.props.previous();
  }

  updateThirdStepState () {
    this.setState({
      stepThree: !this.state.stepThree,
      stepTwo: !this.state.stepTwo,
      dataSource: []
    })
    this.props.next();
  }

  movePrevioustoSecondStep () {
    this.setState({
      stepThree: !this.state.stepThree,
      stepTwo: !this.state.stepTwo
    })
    this.props.previous();
  }

  updateModalState () {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {

    let render = 
      <div className="fill-box">
        <h3 className="create-account">CREATE YOUR ACCOUNT</h3>
        <div className="sub-text">This is step 1</div>
        <div className="fillup-form"> 
          <TextField
            hintText="Email"
            dataSource={this.state.dataSource}
            floatingLabelText="Email"
            fullWidth={true}
          />
          <PasswordField
            hintText="At least 8 characters"
            floatingLabelText="Password"
            visible = {false}
          />
          <PasswordField
            hintText="At least 8 characters"
            floatingLabelText="Confirm the password"
            visible = {false}
          />
        </div>
        <div className="buttons">
          <RaisedButton onClick={this.updateSecondStepState.bind(this)} className="next-button" label="NEXT" primary={true}/>
        </div>
      </div>
    let stepTwo = 
      <div className="fill-box-after">
        <h3 className="create-account">SOCIAL PROFILES</h3>
        <div className="sub-text">Your presence on the social network</div>
        <div className="fillup-form"> 
          <AutoComplete
            hintText="Twitter"
            dataSource={this.state.dataSource1}
            floatingLabelText="Twitter"
            fullWidth={true}
          />
          <AutoComplete
            hintText="Facebook"
            dataSource={this.state.dataSource2}
            floatingLabelText="Facebook"
            fullWidth={true}
          />
          <AutoComplete
            hintText="Google Plus"
            dataSource={this.state.dataSource3}
            floatingLabelText="Google Plus"
            fullWidth={true}
          />
        </div>
        <div className="buttons">
          <RaisedButton onClick={this.movePrevioustoFirstStep.bind(this)} style={{marginRight: '1em'}} label="PREVIOUS" secondary={true}  />
          <RaisedButton onClick={this.updateThirdStepState.bind(this)} label="NEXT" primary={true}/>
        </div>
      </div>
    let stepThree = 
      <div className="fill-box-stepThree">
        <h3 className="create-account">PERSONAL DETAILS</h3>
        <div className="sub-text">We will never sell it</div>
        <div className="fillup-form"> 
          <TextField
            hintText="First Name"
            dataSource={this.state.dataSource}
            floatingLabelText="First Name"
            fullWidth={true}
          />
          <TextField
            hintText="Last Name"
            dataSource={this.state.dataSource}
            floatingLabelText="Last Name"
            fullWidth={true}
          />
          <TextField
            hintText="Phone"
            dataSource={this.state.dataSource}
            floatingLabelText="Phone"
            fullWidth={true}
          />
          <TextField
            hintText="Address"
            dataSource={this.state.dataSource}
            floatingLabelText="Address"
            fullWidth={true}
          />
        </div>
        <div className="buttons">
          <RaisedButton onClick={this.movePrevioustoSecondStep.bind(this)} style={{marginRight: '1em'}} label="PREVIOUS" secondary={true}  />
          <RaisedButton onClick={this.updateModalState.bind(this)} label="COMPLETED" primary={true}/>
        </div>
      </div>

    const actions = 
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.updateModalState.bind(this)}
      />

    let modal =  
      <Dialog
        title="COMPLETED"
        actions={actions}
        modal={false}
        open={this.state.modal}
        onRequestClose={this.updateModalState.bind(this)}
      >
        Thanks for filling up your information. 
      </Dialog>
    
    if( this.state.stepTwo ) {
      render = stepTwo;
    }

    if( this.state.stepThree ) {
      render = stepThree;
    }

    return (
      <div>
        {render}
        {modal}
      </div>
    )
  }
}

export default inputTextFillBox;