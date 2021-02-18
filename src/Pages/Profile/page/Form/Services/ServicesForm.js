 import React from 'react';
 
import { 
  ServicesBox, 
  ServicesForm, 
  // ServicesH1, 
  ServicesWrapper,
  ServicesCol,
  Img,
  Description,
  ImageForm,
  Icon,
  Ico,
} from './ServicesFormStyle';
import './style/Services.scss'
import {AiFillAlert} from "react-icons/ai";
 
export function ServiceForm () {
 
  return (
        <ServicesForm>
          <ServicesWrapper> 
            <ServicesCol>
            <ServicesBox>
              <ImageForm>
              <Img onClick={onchange}>
              <Icon>
                <Ico>
                 <AiFillAlert size={40} className="Alert" />
                </Ico>
              </Icon>
              </Img>
              </ImageForm>
              <Description>
                 <h1>WEB DEVELOPMENT</h1> 
                      <p className="p1">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
            </ServicesBox>
            </ServicesCol>
            <ServicesCol>
            <ServicesBox>
            <ImageForm>
              <Img>
              <Icon>
                <Ico>
                 <AiFillAlert size={40} className="Alert" />
                </Ico>
              </Icon>
              </Img>
              </ImageForm>
              <Description>
                 <h1>WEB DEVELOPMENT</h1> 
                      <p className="p1">In publishing and graphic design, 
                        Lorem ipsum is a placeholder text commonly 
                        used to demonstrate the visual 
                        form of a document or a 
                        typeface without relying on meaningful content. 
                        Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
            </ServicesBox>
            </ServicesCol>
            <ServicesCol>
            <ServicesBox>
            <ImageForm>
              <Img>
              <Icon>
                <Ico>
                 <AiFillAlert size={40} className="Alert" />
                </Ico>
              </Icon>
              </Img>
              </ImageForm>
             <Description>
                 <h1>WEB DEVELOPMENT</h1> 
                      <p className="p1">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
            </ServicesBox>
            </ServicesCol>
          {/*  */}
            <ServicesCol>
            <ServicesBox>
            <ImageForm>
              <Img>
              <Icon>
                <Ico>
                 <AiFillAlert size={40} className="Alert" />
                </Ico>
              </Icon>
              </Img>
              </ImageForm>
           <Description>
                 <h1>WEB DEVELOPMENT</h1> 
                      <p className="p1">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
            </ServicesBox>
            </ServicesCol>
            <ServicesCol>
            <ServicesBox>
            <ImageForm>
              <Img>
              <Icon>
                <Ico>
                 <AiFillAlert size={40} className="Alert" />
                </Ico>
              </Icon>
              </Img>
              </ImageForm>
           <Description>
                 <h1>WEB DEVELOPMENT</h1> 
                      <p className="p1">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
            </ServicesBox>
            </ServicesCol>
            <ServicesCol>
            <ServicesBox>
            <ImageForm>
              <Img>
              <Icon>
                <Ico>
                 <AiFillAlert size={40} className="Alert" />
                </Ico>
              </Icon>
              </Img>
              </ImageForm>
           <Description>
                 <h1>WEB DEVELOPMENT</h1> 
                      <p className="p1">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </Description>
            </ServicesBox>
            </ServicesCol>
          </ServicesWrapper>
        </ServicesForm>
        
     );
 }


 export default ServiceForm