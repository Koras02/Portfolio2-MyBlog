import React from 'react';

import {
   ServicesBox,
   ServicesForm,
   // ServicesH1, 

   ServicesCol,

   Description,
   ImageForm,
   Icon,
   // Ico,
} from './ServicesFormStyle';
import './style/Services.scss'
import { AiFillAlert } from "react-icons/ai";

export function ServiceForm() {

   return (
      <ServicesForm>
         <ServicesCol>
            <ServicesBox>
               <ImageForm>
                  <Icon>
                     <AiFillAlert size={40} className="Alert" />
                  </Icon>
               </ImageForm>
               <Description>
                  <h1 className="Serviceh1">WEB DEVELOPMENT</h1>
                  <p className="p100">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
               </Description>
            </ServicesBox>
         </ServicesCol>
         <ServicesCol>
            <ServicesBox>
               <ImageForm>
                  <Icon>
                     <AiFillAlert size={40} className="Alert" />
                  </Icon>
               </ImageForm>
               <Description>
                  <h1 className="Serviceh1">WEB DEVELOPMENT</h1>
                  <p className="p100">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
               </Description>
            </ServicesBox>
         </ServicesCol>
         <ServicesCol>
            <ServicesBox>
               <ImageForm>
                  <Icon>
                     <AiFillAlert size={40} className="Alert" />
                  </Icon>
               </ImageForm>
               <Description>
                  <h1 className="Serviceh1">WEB DEVELOPMENT</h1>
                  <p className="p100">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
               </Description>
            </ServicesBox>
         </ServicesCol>
         {/*  */}
         <ServicesCol>
            <ServicesBox>
               <ImageForm>
                  <Icon>
                     <AiFillAlert size={40} className="Alert" />
                  </Icon>
               </ImageForm>
               <Description>
                  <h1 className="Serviceh1">WEB DEVELOPMENT</h1>
                  <p className="p100">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
               </Description>
            </ServicesBox>
         </ServicesCol>
         <ServicesCol>
            <ServicesBox>
               <ImageForm>
                  <Icon>
                     <AiFillAlert size={40} className="Alert" />
                  </Icon>
               </ImageForm>
               <Description>
                  <h1 className="Serviceh1">WEB DEVELOPMENT</h1>
                  <p className="p100">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
               </Description>
            </ServicesBox>
         </ServicesCol>
         <ServicesCol>
            <ServicesBox>
               <ImageForm>
                  <Icon>
                     <AiFillAlert size={40} className="Alert" />
                  </Icon>
               </ImageForm>
               <Description>
                  <h1 className="Serviceh1">WEB DEVELOPMENT</h1>
                  <p className="p100">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
               </Description>
            </ServicesBox>
         </ServicesCol>

      </ServicesForm>

   );
}


export default ServiceForm