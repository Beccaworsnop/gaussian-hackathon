import React from "react";
import * as Components from './Components';


function App() {
  const [staySignedIn, setStaySignedIn] = React.useState(false);

  return (
    <Components.Container>
      <Components.SignInContainer>
 
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Components.CheckboxContainer>
            <Components.CheckboxInput 
              type="checkbox" 
              id="staySignedIn"
              checked={staySignedIn}
              onChange={(e) => setStaySignedIn(e.target.checked)}
            />
            <Components.CheckboxLabel htmlFor="staySignedIn">
              Stay signed in
            </Components.CheckboxLabel>
          </Components.CheckboxContainer>
          
          <Components.Button>Sign In</Components.Button>

          <Components.ForgotPasswordContainer>
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
        </Components.ForgotPasswordContainer>

        </Components.Form>
        <Components.AccountPrompt>
          <Components.Account>Don't have an account?</Components.Account>
          <Components.SignUp href="#">Sign up</Components.SignUp>
        </Components.AccountPrompt>

        <Components.SocialButtons>
          <Components.Line>OR</Components.Line>
          <Components.SocialButton>
            <img src="google.svg" alt="Google" />
            Continue with Google
          </Components.SocialButton>
          <Components.SocialButton>
            <img src="facebook.svg" alt="Facebook" />
            Continue with Facebook
          </Components.SocialButton>
          <Components.SocialButton>
            <img src="apple.svg" alt="Apple" />
            Continue with Apple
          </Components.SocialButton>
        </Components.SocialButtons>
        <Components.Spectra>
        <Components.Text>By clicking Sign in, Continue with Google, Facebook, or Apple, you <br/> agree to Spectra <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy</a>.</Components.Text>
      </Components.Spectra>
      </Components.SignInContainer>

      <Components.ImageBackground />

    </Components.Container>
  );
}

export default App;