import styled from 'styled-components';

export const Container= styled.div`
  background: #fff;
  min-height: 100vh;
`;

export const Header= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Pages= styled.div`
  display: flex;
  gap: 20px;
`;

export const Page= styled.a`
  font-size: 16px;
  color: #24361A;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const AuthButtons = styled.div`
    display: flex;
    gap: 10px;
`;

export const LogInBtn= styled.button`
   border-radius: 20px;
   letter-spacing: 1px;
   background-color: #fff;
   border: 1px solid rgb(1, 74, 35);
   color: rgb(1, 74, 35);
   padding: 8px 20px;
   cursor: pointer;
    &:hover {
    opacity: 0.9;
    background-color: #f5f5f5;
  }
`;

export const SignUpBtn= styled.button`
   border-radius: 20px;
   letter-spacing: 1px;
   background-color:rgb(1, 74, 35);
   border: 1px solid rgb(1, 74, 35);
   color: #fff;
   cursor: pointer;
   padding: 8px 20px;
    &:hover {
    opacity: 0.9;
  }
`;

export const Logo= styled.img`
  height: 60px;
  filter: brightness(0) saturate(100%) invert(18%) sepia(30%) saturate(800%) hue-rotate(70deg);
  margin-bottom: 20px;
  display: block;
`;

export const Title= styled.h2`
  color: #24361A;
  margin-bottom: 30px;
  font-size: 28px;
  letter-spacing: 1px;
`;

export const ContentContainer = styled.div`
    text-align: center;
    padding: 50px 20px;
`;

export const Box= styled.div`
  border: 3px solid rgb(1, 74, 35);
  background-color: #DEEAD8;
  padding: 20px;
  text-align: center;

`;

export const Img1= styled.img`
  width: 100%;
  max-width: 500px;
  border: 3px solid #24361A;
  border-radius: 20px;
`;

export const Img2= styled.img`
  width: 100%;
  max-width: 500px;
  border: 3px solid #24361A;
  border-radius: 20px;
  transform: translateX(50px);
`;

export const Btn= styled.button`
   border-radius: 10px;
   font-size: 18px;
   background-color:rgb(1, 74, 35);
   border: none;
   margin-top: 80px;
   padding: 12px 100px;
   color: #fff;
   cursor: pointer;
   transition: all ease 0.3s;
   &:hover {
    opacity: 0.9;
  }
`;