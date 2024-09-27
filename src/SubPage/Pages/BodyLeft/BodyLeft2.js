// BodyLeft 밑에 부분
 import React from 'react';
 import { 
     BoxComments,
     BoxCommentsList,
     BoxCommentsTitle,
     BoxCommentsTitle4, 
     BoxCommentsWrapper,
     BoxCommentsList1,
     BoxCommentsAvatar,
     BoxCommentsAvatarImages,
     BoxCommentsDetails,
     BoxCommentsDetalisAutor,
     BoxCommentsDetalisAutorP,
     BoxReplayLink
    } from '../style/BodyLeft2Style';
import '../style/BodyLeft.scss'
import Image from '../Images/Neko.jpg';

export function BodyLeft2() {
     return (
        <BoxCommentsWrapper>
           <BoxCommentsTitle>
             <BoxCommentsTitle4 className="title-left">
                Comments (34)
             </BoxCommentsTitle4>
           </BoxCommentsTitle>
           <BoxComments>
            <BoxCommentsList>
                <BoxCommentsAvatar>
                    <BoxCommentsAvatarImages src={Image}></BoxCommentsAvatarImages>
                </BoxCommentsAvatar>
                <BoxCommentsDetails>
                 <BoxCommentsDetalisAutor>
                     Ovliver Colmenares
                 </BoxCommentsDetalisAutor>
                 <BoxCommentsDetalisAutorP>
                 <span class="span1"> 18 Sep 2021 </span>
                 <br />
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores reprehenderit, provident
                 cumque ipsam temporibus maiores quae natus libero optio,
                 at qui beatae ducimus placeat debitis voluptates amet corporis.
                 </BoxCommentsDetalisAutorP>
                 <BoxReplayLink>
                    Reply
                 </BoxReplayLink>
                </BoxCommentsDetails>
            </BoxCommentsList>
            <BoxCommentsList>
            <BoxCommentsAvatar>
                    <BoxCommentsAvatarImages src={Image}></BoxCommentsAvatarImages>
                </BoxCommentsAvatar>
                <BoxCommentsDetails>
                 <BoxCommentsDetalisAutor>
                     Ovliver Colmenares
                 </BoxCommentsDetalisAutor>
                 <BoxCommentsDetalisAutorP>
                 <span class="span1"> 18 Sep 2021 </span>
                 <br />
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores reprehenderit, provident
                 cumque ipsam temporibus maiores quae natus libero optio,
                 at qui beatae ducimus placeat debitis voluptates amet corporis.
                 </BoxCommentsDetalisAutorP>
                 <BoxReplayLink>
                    Reply
                 </BoxReplayLink>
                </BoxCommentsDetails>
            </BoxCommentsList>
            <BoxCommentsList1>
            <BoxCommentsAvatar>
                    <BoxCommentsAvatarImages src={Image}></BoxCommentsAvatarImages>
                </BoxCommentsAvatar>
                <BoxCommentsDetails>
                 <BoxCommentsDetalisAutor>
                     Ovliver Colmenares
                 </BoxCommentsDetalisAutor>
                 <BoxCommentsDetalisAutorP>
                 <span class="span1"> 18 Sep 2021 </span>
                 <br />
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores reprehenderit, provident
                 cumque ipsam temporibus maiores quae natus libero optio,
                 at qui beatae ducimus placeat debitis voluptates amet corporis.
                 </BoxCommentsDetalisAutorP>
                 <BoxReplayLink>
                    Reply
                 </BoxReplayLink>
                </BoxCommentsDetails>
            </BoxCommentsList1>
            <BoxCommentsList>
            <BoxCommentsAvatar>
                    <BoxCommentsAvatarImages src={Image}></BoxCommentsAvatarImages>
                </BoxCommentsAvatar>
                <BoxCommentsDetails>
                 <BoxCommentsDetalisAutor>
                     Ovliver Colmenares
                 </BoxCommentsDetalisAutor>
                 <BoxCommentsDetalisAutorP>
                 <span class="span1"> 18 Sep 2021 </span>
                 <br />
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores reprehenderit, provident
                 cumque ipsam temporibus maiores quae natus libero optio,
                 at qui beatae ducimus placeat debitis voluptates amet corporis.
                 </BoxCommentsDetalisAutorP>
                 <BoxReplayLink>
                    Reply
                 </BoxReplayLink>
                </BoxCommentsDetails>
            </BoxCommentsList>
           </BoxComments>
        </BoxCommentsWrapper>
     );
 }


 export default BodyLeft2;