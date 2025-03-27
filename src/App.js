import React from "react";
import * as Components from "./Components";

function App() {
  return (
    <Components.Container>
      {/* Partie gauche : Formulaire de connexion */}
      <Components.SignInContainer>
        <Components.Form>
          <Components.Title>Welcome back!</Components.Title>
          <Components.SubText>Enter your credentials to access your account</Components.SubText>

          <Components.Label>Email address</Components.Label>
          <Components.Input type="email" placeholder="Enter your email" />

          <Components.Label>Password <Components.ForgotPassword href="#">forgot password</Components.ForgotPassword></Components.Label>
          <Components.Input type="password" placeholder="Enter your password" />

          <Components.CheckboxContainer>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" style={{fontSize: "10px" , color: "#333"}}>Remember for 30 days</label>
          </Components.CheckboxContainer>

          <Components.Button>Login</Components.Button>

          <Components.SocialButtons>
            <Components.SocialButton>
              <img src="google.svg" width="25" alt="Google" />
              Sign in with Google
            </Components.SocialButton>

            <Components.SocialButton>
              <img src="apple.svg" width="30" alt="Apple" />
              Sign in with Apple
            </Components.SocialButton>
          </Components.SocialButtons>

          <Components.SignUpText>
            Don't have an account? <a href="/">Sign Up</a>
          </Components.SignUpText>
        </Components.Form>
      </Components.SignInContainer>

      {/* Partie droite : Image */}
      <Components.ImageBackground />
    </Components.Container>
  );
}

export default App;
