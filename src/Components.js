import styled from "styled-components";

// Conteneur principal
export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

// Partie gauche (Formulaire)
export const SignInContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

// Partie droite (Image)
export const ImageBackground = styled.div`
  width: 50%;
  height: 100%;
  background-image: url('/woman-reserve-is-playing-with-kangaroo.jpg');
  background-size: cover;
  background-position: center;
`;

// Formulaire
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  text-align: left;
`;

// Titre
export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Sous-titre
export const SubText = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

// Label pour Email & Password
export const Label = styled.label`
  font-size: 14px;
  margin-top: 10px;
  font-weight: 500;
`;

// Input
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Lien "Forgot password"
export const ForgotPassword = styled.a`
  font-size: 12px;
  color: #333;
  text-align: right;
  margin-top: 5px;
  display: block;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// Checkbox + Texte
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 15px 0;
`;

// Bouton principal
export const Button = styled.button`
  width: 100%;
  background-color: rgb(1, 74, 35);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    opacity: 0.9;
  }
`;

// Boutons sociaux
export const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

// Texte pour s'inscrire
export const SignUpText = styled.p`
  font-size: 12px;
  margin-top: 20px;
  color: #666;
  a {
    font-weight: bold;
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }
`;
