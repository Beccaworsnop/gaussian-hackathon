import React from "react";
import '../Components/Color.js';
import * as Color from '../Components/Color.js';

function ColorLion() {
    return(
        <Color.Container>
        {/*Navigation bar*/}
         <Color.Header>
           <Color.NavContainer>
              <Color.Pages>
                <Color.Page href="#">Home</Color.Page>
                <Color.Page href="#">Learn</Color.Page>
                <Color.Page href="#">Take action</Color.Page>
                <Color.Page href="#">Ressources</Color.Page>
                <Color.Page href="#">About Us</Color.Page>
              </Color.Pages>
                    
              <Color.AuthButtons>
                <Color.LogInBtn href="#">Log In</Color.LogInBtn>
                <Color.SignUpBtn href="#">Sign up</Color.SignUpBtn>
              </Color.AuthButtons>
            </Color.NavContainer>
            <Color.Logo src="svg 1.svg" alt="Logo"/>
          </Color.Header>

          <Color.ContentContainer>
              <Color.Title>Color the lion:</Color.Title>
              <Color.Img1 src="image 8.jpg" alt="Lion coloring page"/>
              <Color.Img2 src="Mask group.jpg" alt="Colored example"/>
              <Color.Btn>Print the PDF</Color.Btn>
          </Color.ContentContainer>
        </Color.Container>
    );
}

export default ColorLion;
