import styled from 'styled-components';

//MAIN CONTAINER 
export const Container = styled.div`
  display: flex;
  width:  1400px;
  height: 1000px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

//SIGN-IN FORM 
export const SignInContainer = styled.div`
  width: 100%;
  max-width: 700px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

//IMAGE BACKGROUND
export const ImageBackground = styled.div`
  width: 50%;
  height: 100%;
  background-image: url('/woman-reserve-is-playing-with-kangaroo.jpg');
  background-size: cover;  
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
   background-repeat: no-repeat;
  position: absolute;
  right: 0;
  z-index: 1;
`;

//FORM 
export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2px 50px;
  margin-top: 120px;
  width: 100%;
  text-align: center;
  position: relative;
`;

//TITLE 
export const Title = styled.h1`
  font-weight: bold;
  margin: 20px 0; /* Added space below the title */
  color: #333;
`;

//INPUT 
export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 5px;
  &:focus {
    outline: 2px solidrgb(1, 74, 35);
  }
`;

//BUTTON 
export const Button = styled.button`
  border-radius: 10px;
  border: 1px solid rgb(1, 74, 35);
  background-color:rgb(1, 74, 35);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 15px 180px 15px 180px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 20px;  /* Adds space above the button */
  cursor: pointer;   /* Shows clickable state */
  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
`;

//ANCHOR - (Forgot your password?)
export const Anchor = styled.a`
  color: #333;
  font-size: 13px;
  text-decoration: none;
  border-bottom: 1cm #333;
  margin: 15px 0;
  &:hover {
    text-decoration: underline;
  }
`;

//FORGOT PASSWORD
export const ForgotPasswordContainer = styled.div`
  position: absolute;
  width: auto;
  right: 50px;
  bottom: 77px;
`;

// CHECKBOX - (Stay Signed In)
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
  width: 16px;
  height: 16px;
   &:hover {
    transform: scale(1.05);
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  cursor: pointer;
`;

//the whole text
export const AccountPrompt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;  // Space between text and link
  margin: 2px 0;
  width: 100%;
`;

//ACCOUNT - (D'ont have an account?)
export const Account= styled.p`
  color: #333;
  font-size: 13px;
`;

// (Sign up)
export const SignUp= styled.a`
  color: #333;
  font-size: 13px;
  text-decoration: none;
  border-bottom: 1cm #333;
  margin: 15px 0;
  &:hover {
    text-decoration: underline;
  }
`;

// Social Buttons Container
export const SocialButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 0 50px;
`;

// Divider Line
export const Line = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  color: #333;

  &::before, &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ddd;
    margin: 0 10px;
  }
`;

// Social Button
export const SocialButton = styled.button`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

//TERMS OF USE & PRIVACY POLICY
export const Spectra = styled.div`
  text-align: center;
  margin-top: 40px;
  padding: 0 50px;
`;

export const Text = styled.p`
  color: #333;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  
  a {
    color: #333;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;