import styled from 'styled-components';
 

export const LoadingWrapper = styled.div`
  width:100%;
  height:100vh;
  overflow:hidden;
  background-size:100%;
 
`;

export const LoadingH1Wrapper = styled.div`
  position:relative;
  top:30%;
  border:1px solid #fff;
  max-width:400px;
  min-height:400px;
  height:200px;
  border-radius:90%;
  margin:auto;
  background:#fff;

`

export const LoadingHeader = styled.div`
  width:100%:
  height:1900px;
  background:#000;
 
`;


export const LoadingH1 = styled.div`
   color:#fff;
   text-align:center;
   position:relative;
   top:50%;
   font:bold 60px/20px arial;
   animation:turn 2s infinite;
   animation:example 2s  infinite,
   spin 2s infinite;
 
}
 

 
 @keyframes example {
   0% {color:#fff}
   15% {color:red}
   20% {color:orange}
   25% {color:yellow}
   30% {color:green}
 }
 @keyframes spin { 
    from { 
        transform: rotate(0deg); 
    } to { 
        transform: rotate(360deg); 
    }
}
 
   `;