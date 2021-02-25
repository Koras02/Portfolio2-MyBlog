import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const BoxCommentsWrapper = styled.div`
    max-width:760px;
    height:866px;
    padding: 48px 48px 60px 48px;
    margin-bottom:48px;
    border:1px solid #000;
    background-color: rgb(255, 255, 255);
    color:rgb(78,78,78);
    display:block; 
`;

export const BoxCommentsTitle = styled.div`
    max-width:760px;
    height:38px;
    // border:1px solid #000;
    margin-bottom:48px;
`;

export const BoxCommentsTitle4 = styled.div`
    font-size:2rem;
    position:relative;
    color:#1e1e1e;
    margin-bottom:8px;
`;

export const BoxComments = styled.div`
    max-width:760px;
   height:800px;
   margin:auto;
   border:1px solid #000;
`;

export const BoxCommentsList = styled.div`
   max-width:760px;
   height:172px;
   padding-bottom:40px;
   border:1px solid #000;
`

export const BoxCommentsList1 = styled.div`
   max-width:720px;
   height:148px;
   padding-bottom:40px;
   border:1px solid #000;
   margin-left:40px;  
`;

export const BoxCommentsAvatar = styled.div`
   width:80px;
   height:172px;
//    border:1px solid #000;
   box-sizing:border-box;
   display:table-cell;
   vertical-align:top;
   float:left;

`;

export const BoxCommentsAvatarImages = styled.img`
  width:80px;
  height:80px;
`;

export const BoxCommentsDetails = styled.div`
   width:655px;
   height:172px;
   border:1px solid #000;
   padding-left:25px;
   vetical-align:top;
   display:table-cell;
 
`

export const BoxCommentsDetalisAutor = styled.div`
//    width:655px;
   height:28px;
   border:1px solid red;
   display:block;
   margin-bottom:10px;
   font:bold 24px/28.8px arial;
`;

export const BoxCommentsDetalisAutorP = styled.div`
  margin-bottom:16px;
  box-sizing:border-box;
  font:16px/20px arial;
  color:rgb(78,78,78);
`;

export const BoxReplayLink = styled(LinkR)`
  color:#0078ff;
`