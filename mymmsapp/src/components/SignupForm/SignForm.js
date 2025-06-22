import { Component } from "react";

import withNavigation from "../../utils/withNavigation";


import {
    AppContainer,SignupContainer,Heading,InputContainer,InputLabel,NameInput,CheckboxContainer,Checkbox,ShowPassword,GenderContainer,
    SignupButton,NavigateLoginButton,ShowError,
} from "./style"

class SignupForm extends Component{
   state={
    onName:"",
    onUsername:"",
    onPassword:"",
    showPassword:false,
    onGender:"",
    showSubmitError: false,
    errorMsg: '',

   }


  onSignupSuccess = () => {
    //SignUp Successfully Navigate to Login Page
    this.props.navigate("/login")
  }

  onSignupFailure = errorMsg => {
    //Signup Failure
    this.setState({showSubmitError: true, errorMsg})
  }


  submitForm = async event => {
    event.preventDefault();
    const { onName, onUserName, onPassword, onGender } = this.state;

  const userDetails = {
    name: onName,
    username: onUserName,
    password: onPassword,
    gender: onGender,
  };
  console.log(userDetails)

  const url = 'http://localhost:5000/register/';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userDetails),
  };

  const response = await fetch(url, options);
  const data = await response.json();
   if (response.ok === true) {
      this.onSignupSuccess()
    } else {
      this.onSignupFailure(data.message)
    }
};


   onChangeName = event => {
    this.setState({onName: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({onUserName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({onPassword: event.target.value})
  }

  onChangeGender = event => {
    this.setState({onGender: event.target.value})
  }

  onShowPassword = () =>{
    this.setState(prevState =>({
        showPassword:!prevState.showPassword
    }))
  }

  
   //name details
    renderNameFilde = () =>{
      const{onName}=this.state
      return(
        <>
          <InputLabel html="username">NAME</InputLabel>
          <NameInput
          type="text"
          id="name"
          value={onName}
          placeholder="name"
          onChange={this.onChangeName}
          />
      
        </>
      )
    }

    //username details
    renderUserNameFilde = () =>{
      const{onUserName}=this.state
      return(
        <>
          <InputLabel html="username">USERNAME</InputLabel>
          <NameInput
          type="text"
          placeholder="username"
          value={onUserName}
          onChange={this.onChangeUserName}
          id="username"
          />
      
        </>
      )
    }
     //Password details
    renderPasswordFilde = () =>{
      const{onPassword,showPassword}=this.state
      const inputType=showPassword ? "text" : "password";
      return(
        <>
          <InputLabel html="passowrd">PASSWORD</InputLabel>
          <NameInput
          id="password"
          type={inputType}
          value={onPassword}
          placeholder="password"
          onChange={this.onChangePassword}
          />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      
        </>
      )
    }

    renderGenderFilde = () =>{
      const{onGender}=this.state
        return(
           <>
          <InputLabel html="gender">GENDER</InputLabel>
          <GenderContainer id="gender" onChange={this.onChangeGender} value={onGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </GenderContainer>
      
        </> 
        )
    }

   onLogin = () =>{
    //Already have an account go to login page
    this.props.navigate("/login")
   }

     render(){
        const{showSubmitError,errorMsg}=this.state
        //SignUpForm Userdetails
        return(
            <AppContainer>
            <SignupContainer onSubmit={this.submitForm}>
                <Heading>Sign Up</Heading>
                <InputContainer>{this.renderNameFilde()}</InputContainer>
                <InputContainer>{this.renderUserNameFilde()}</InputContainer>
                <InputContainer>{this.renderPasswordFilde()}</InputContainer>
                <InputContainer>{this.renderGenderFilde()}</InputContainer>
                <SignupButton type="submit">Sign Up</SignupButton>
                {showSubmitError && <ShowError>* {errorMsg}</ShowError>}
                <NavigateLoginButton type="button" onClick={this.onLogin}>Already have an account?</NavigateLoginButton>
            </SignupContainer>
            </AppContainer>
        )
     }
}
export default withNavigation(SignupForm)