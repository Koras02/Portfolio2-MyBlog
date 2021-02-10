 import React, { useState }  from 'react';
import styled from 'styled-components';
 
import { 
  ServicesBox, 
  ServicesForm, 
  // ServicesH1, 
  ServicesWrapper,
  ImageForm,
  Img,
  Description,
 
} from './ServicesFormStyle';
import './style/Services.scss'
 
 

export function ServiceForm () {
   const [click,setClick] = useState();
   const onClick = () => {
     setClick(click => !click);
   }
     const onColor = () => {
       styled.div`
        colo:red
       `
   }
  return (
        <ServicesForm>
          <ServicesWrapper> 
            <ServicesBox>
               <ImageForm>
                  <Img onClick={onClick} Color={onColor}></Img>
                  <Description>
                 <h1>WEB DESIGN</h1> 
                 <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
               </ImageForm>
            </ServicesBox>
            <ServicesBox>
              <ImageForm>
                  <Img></Img>
                  <Description>
                 <h1>WEB DEVELOPMENT</h1> 
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
               </ImageForm>
            </ServicesBox>
            <ServicesBox>
             <ImageForm>
                 <Img></Img>
                 <Description>
                 <h1>PHOTOGRAPHY</h1> 
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
            </ImageForm>
            </ServicesBox>
            <ServicesBox>
           <ImageForm>
           <Img></Img>
           <Description>
                 <h1>RESPONSIV DESIGN</h1> 
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
           </ImageForm>
            </ServicesBox>
            <ServicesBox>
           <ImageForm>
           <Img></Img>       
           <Description>
                 <h1>GRAPHIC DESIGN</h1> 
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
            </ImageForm>
            </ServicesBox>
            <ServicesBox>
           <ImageForm>
           <Img></Img>  
           <Description>
                 <h1>MARKETING SERVICES</h1> 
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
            </ImageForm>
            </ServicesBox>
          </ServicesWrapper>
          
        </ServicesForm>
        
     );
 }


 export default ServiceForm