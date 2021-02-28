import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const BlogWrapper = styled.div`
   max-width:100%;
   height:720.312px;
   border:1px solid #fff; 
   background:#fff;
   padding:64px;

   @media screen and (max-width:1400px) {
      max-width:1400px;
      height:694.344px;
      border:1px solid #000;
   }
`;

export const BlogContainer = styled.div`
    max-width:1320px;
    height:710.312px;
    margin:auto;
   //  border:1px solid #000;
    padding:0px 12px 0px 12px;
   //  border:1px solid #000;

   @media screen and (max-width:1400px;) {
      max-width:1116px;
      height:694.344px;
      padding:0px 12px 0px 12px;
      border:1px solid blue;

   }
`;

export const BlogRow = styled.div`
     max-width:1320px;
     height:174px;
     box-sizing:border-box;
     color:rgb(78,78,78)
     display:flex;
     flex-wrap:wrap;
     margin:auto;
   //   border:1px solid red;
`

export const BlogCol = styled.div`
   width:1296px;
   height:174px;
   padding:0px 12px 0px 12px;
   border:1px soliid #000;
   max-width:100%;
`

export const BlogColTitle = styled.div`
    display:block;
    color:rgb(78,78,78);
     font:bold 16px/24px arial;
     margin-bottom:64px;
     text-align:center;
`;

export const BlogColTitleA = styled.div`
  color:rgb(30,30,30);
  display:block;
  font:bold 48px/57.6px arial;
  margin-bottom:8px;
  text-decoration:none;
`;

export const BlogSubtitleA = styled.div`
   text-decoration:none;
   color:#4e4e4e;
   margin-bottom:1rem;
`

export const BlogSubTitleLine = styled.div`
   width:48px;
   height:5px;
   background:#0078ff;
   margin:0 auto;
`

export const BlogRow2 = styled.div`
  max-width:1320px;
  height:536px;
  margin:auto;
//   border:1px solid #000;

@media screen and (max-width:1400px) {
   max-width:1140px;
   height:520.344px;
   border:1px solid yellow;
}
`;

export const BlogRow2Col = styled.div`
  max-width:100%;
  width:416px;
   height:536.312px;  
   // border:2px solid blue;
   padding:0px 12px 0px 12px;
   box-sizing:border-box;
   display:block;
   margin-left:0px;
   display:inline-flex;
   
 
@media screen and (max-width:1400px) {
   max-width:380px;
   height:520.344px;
   padding:0px 12px 0px 12px;

}

@media screen and (max-width:1200px) {
   max-width:295.984px;
   height:528.375px;
   border:1px solid #000;
   padding:0px 12px 0px 12px;
   position:relative;
   left:5%;
}

@media screen and (min-width: 768px) {
    flex: 0 0 auto;
    width: 33.3333333333%;
}
`;

export const BlogRow2ColMd = styled.div`
    min-width:0;
    width:414px;
    height:486.312px;
    background-clip:border-box;
    background-color:rgb(255,255,255); 
    border:4px solid rgba(0,0,0,0.125);
    background-repeat:no-repeat;
    border-radius:.25rem;
    display:block;
   box-sizing:border-box;
   position:relative;

   @media screen and (max-width:1200px) {
          max-width:295px;
          padding:0px 12px 0px 12px;
   }

`;

export const BlogRow2ColImg = styled.img`
    max-width:100%;
    height:275.719px;
   //  border:1px solid red;
    border-radius:3px;
    display:inblock;
    box-sizing:border-box;

`;

export const BlogRow2ColBody = styled.div`
   //  border:1px solid #000;
    max-width:100%;
    height:129.594px;
    // padding:16px 16px 16px 16px;
    display:block;
    box-sizing:border-box;
    flex:1 1 auto;
    padding:1rem 1rem;
    margin-bottom:20px;

`;

export const BlogRow2ColCardBox = styled.div`
    max-width:384px;height:38px;
    text-align:center;
    display:block;
    position:absolute;
    top:55%;
    left:15px;
    right:15px;
    line-height:25px;
    overflow:hidden;
`

export const BlogRow2ColCategoryBox = styled.div`
   display:inline-block;
   color:#fff;
   padding:0px 15px 5px;
   overflow:hidden;
   background-color:#0078ff;
   border-radius:4px;
`

export const BlogRow2ColCardTitle = styled.div`
   max-width:384px;
   height:24px;
   display:block;
   font-size:1.3rem;
   margin-top:.6rem;
   margin-bottom:.5rem;
`

export const BlogRow2ColCardLink = styled(LinkR)`
   color:#1e1e1e;
   transition: all 0.5s ease-in-out;
   display:block;
`

export const BlogRow2ColCardDescription = styled.div`
   max-width:382px;
   height:72px;
   margin-bottom:12px;
   color:#4e4e4e;
   display:block;
   margin-block-start:1em;
   margin-block-end:0.5em;
   font:14px/16px arial;

`
export const BlogRow2ColCardDescriptionP = styled(LinkR)`
    margin-bottom:10px;
    font:12px/24px arial;
`



export const BlogRow2ColFooter = styled.div`
    max-width:382px;
    height:32px;
    padding:8px 16px 8px 16px;
    background-color:rgba(0,0,0,.03);
`

export const BlogRow2ColFooterAuthor = styled.div`
   display:inline-block;
`

export const BlogRow2ColFooterAuthorLink = styled(LinkR)`
    color:#1e1e1e;
    text-decoration:none;
    transition:all 0.5s ease-in-out;
`

export const BlogRow2ColFooterAuthorLinkImage = styled.img`
   width:32px;
   height:32px;
   margin-right:4px;
   overflow:hidden;
   border-radius:50%!important;
   vertical-align:middle;
   // border:1px solid #000;
   float:left;
`

export const BlogRowColFooterAutorSpan = styled.div`
   display:inline-flex;
   position:relative;
   top:3px;
   left:2px;
   font:bold 12px/14px arial;
     
`;

export const BlogRow2ColFooterDate = styled.div`
   color:#4e4e4e;
   display:inline-block;
   float:right;
   width:68.453px;
   height:24px;
   box-sizing:border-box;
   color:rgb(78,78,78);
   display:block;
   font-size:16px;
   font-weight:400;
   line-height:24px;
   
`