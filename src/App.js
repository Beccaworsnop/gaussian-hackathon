import React from "react";
import * as Components from './Components';
import { Link } from 'react-router-dom';
import AutoCarousel from './Components/AutoCarousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColorLion from './Coloriage/Color-lion';
import ColorGiraffe from './Coloriage/Color-giraffe';
import ColorBear from './Coloriage/Color-bear';

function App() {

  return (
   <Router>
    <Components.Container>

      {/* Navigation bar to be changed later */}
      <Components.Header>
        <Components.Pages>
          <Components.Page href="#">Home</Components.Page>
            <Components.Page href="#">Learn</Components.Page>
            <Components.Page href="#">Take action</Components.Page>
            <Components.Page href="#">Ressources</Components.Page>
            <Components.Page href="#">About Us</Components.Page>
        </Components.Pages>
        <Components.LogInBtn href="#">Log In</Components.LogInBtn>
        <Components.SignUpBtn href="#">Sign up</Components.SignUpBtn>
        
      </Components.Header>
      
      <Routes>
        <Route path="/" element={
        <>
         <AutoCarousel/>
         <Components.WelcomeMsg><img src="WelcomeMsg.png" alt="kid's corner"/></Components.WelcomeMsg>

         <Components.Section>
          <Components.Title>Color your favorite animal!</Components.Title>
          <Components.Elements>
         <Link to="/Color-lion">
           <Components.Box>
             <img src="image 8.jpg" alt="lion"/>
           </Components.Box>
         </Link>
         <Link to="/Color-giraffe">
           <Components.Box>
           <img src="image 1.jpg" alt="giraffe"/>
           </Components.Box>
         </Link>
         <Link to="/Color-bear">
           <Components.Box>
           <img src="image 8 (1).jpg" alt="bear"/>
           </Components.Box>
         </Link>
         </Components.Elements>
         </Components.Section>

         <Components.Section>
                <Components.Title>Print a mask</Components.Title>
                <Components.Elements>
                  <Components.Box href="#">
                    <img src="bear_FOR PRINT.png" alt="bear for print"/>
                    <p>Make Black Bear</p>
                  </Components.Box>
                  <Components.Box href="#">
                    <img src="butterfly.png" alt="butterfly for print"/>
                    <p>Make Butterfly</p>
                  </Components.Box>
                  <Components.Box href="#">
                    <img src="flaminngo.png" alt="flamingo for print"/>
                    <p>Make Flamingo</p>
                  </Components.Box>
                </Components.Elements>
              </Components.Section>

              <Components.Section>
                <Components.Title>All about animals</Components.Title>
                <Components.Elements>
                  <Components.Box href="#">
                    <img src="American Goldfinch #2-1.jpg" alt="bird"/>
                    <p>All about American Goldfinch</p>
                  </Components.Box>
                  <Components.Box href="#">
                    <img src="Gallery.jpg" alt="bear"/>
                    <p>All about American Goldfinch</p>
                  </Components.Box>
                  <Components.Box href="#">
                    <img src="Fruit bats.jpg" alt="bat"/>
                    <p>All about American Goldfinch</p>
                  </Components.Box>
                </Components.Elements>
              </Components.Section>
        </>
          }/>
          <Route path="/Color-lion" element={<ColorLion />} />
          <Route path="/Color-giraffe" element={<ColorGiraffe />} />
          <Route path="/Color-bear" element={<ColorBear />} />
        </Routes>
    </Components.Container>
    </Router>
  );
}

export default App;
