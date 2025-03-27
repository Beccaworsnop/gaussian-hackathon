import styled from 'styled-components';

export const Container = styled.div`
  background: #f8f9fa;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
`;

export const Header = styled.header`
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
   margin: 0;
  left: 0;
  right: 0;
`;

export const Pages = styled.nav`
  display: flex;
  gap: 15px;
`;

export const Page = styled.a`
  color: #24361A;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 15px;
  transition: color 0.3s;
  &:hover {
    color: #017423;
  }
`;

export const WelcomeMsg = styled.div`
  text-align: center;
  margin: 20px 0;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Section = styled.section`
  margin: 60px 0;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #24361A;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const Elements = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 10px;
`;

export const Box = styled.div`
  background: #f1f3f5;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  p {
    margin-top: 10px;
    font-weight: bold;
    color: #24361A;
  }
`;

export const LogInBtn = styled.button`
  border-radius: 20px;
  background-color: #fff;
  border: 2px solid #24361A;
  color: #24361A;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #017423;
    color: #fff;
  }
`;

export const SignUpBtn = styled.button`
  border-radius: 20px;
  background-color: #24361A;
  border: 2px solid #24361A;
  color: #fff;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #014a23;
  }
`;

export const Logo = styled.img`
  height: 60px;
  filter: brightness(0) saturate(100%) invert(18%) sepia(30%) saturate(800%) hue-rotate(70deg);
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #f0f0f0;
  margin: 20px 0;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
    opacity: 0;
    
    &:first-child {
      opacity: 1;
    }
  }
`;
