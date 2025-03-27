import React from "react";
import '../Components/Color.js';
import * as Color from '../Components/Color.js';

function ColorBear() {
    return(
        <Color.Container>

         <Color.Header>
          <Color.Pages>
            <Color.Page href="#">Home</Color.Page>
            <Color.Page href="#">Learn</Color.Page>
            <Color.Page href="#">Take action</Color.Page>
            <Color.Page href="#">Ressources</Color.Page>
            <Color.Page href="#">About Us</Color.Page>
          </Color.Pages>
            
            <Color.LogInBtn href="#">Log In</Color.LogInBtn>
            <Color.SignUpBtn href="#">Sign up</Color.SignUpBtn>
            <Color.Logo src="svg 1.svg"></Color.Logo>
            <Color.Title>Color the Bear:</Color.Title>
          
         </Color.Header>

          <Color.Box>
            <Color.Img1 src="image 8 (1).jpg" />
            <Color.Img2 src=""/>
            <Color.Btn>Print the PDF</Color.Btn>
          </Color.Box>

        </Color.Container>
    );
}

export default ColorBear;
