import React from 'react';
import {
    BodyLeft3TitleBox,
    BodyLeft3TitleBoxLeft,
    BodyLeft3Wrapper,
    BodyLeft3FormMF,
    BodyLeft3FormMFRow,
    BodyLeft3FormInputCol,
    BodyLeft3FormInputGroup,
    BodyLeft3FormInputGroutText,
    BodyLeft3FormWebsiteInputCol,
    BodyLeft3FormWebsiteInputGroup,
    BodyLeft3FormWebsiteInputGroupInput,
    BodyLeft3FormWebsiteCommentCol,
    BodyLeft3FormWebsiteCommentColGroup,
    BodyLeft3FormSendButtonCol,
    BodyLeft3FormSentButton,
    ButtonH1,

} from '../style/BodyLeft3Style';
import './style/BodyLeft3.scss'

function BodyLeft3() {
    return (
        <BodyLeft3Wrapper>
            <BodyLeft3TitleBox>
                <BodyLeft3TitleBoxLeft className="title-left">
                    Leave a Reply
               </BodyLeft3TitleBoxLeft>
            </BodyLeft3TitleBox>
            <BodyLeft3FormMF>
                <BodyLeft3FormMFRow>
                    <BodyLeft3FormInputCol>
                        <BodyLeft3FormInputGroup required>
                            <BodyLeft3FormInputGroutText className="form-control" type="text" placeholder="Name *" required />
                        </BodyLeft3FormInputGroup>
                    </BodyLeft3FormInputCol>
                    <BodyLeft3FormInputCol>
                        <BodyLeft3FormInputGroup>
                            <BodyLeft3FormInputGroutText className="form-control" type="text" placeholder="Email *" required />
                        </BodyLeft3FormInputGroup>
                    </BodyLeft3FormInputCol>
                    <BodyLeft3FormWebsiteInputCol>
                        <BodyLeft3FormWebsiteInputGroup>
                            <BodyLeft3FormWebsiteInputGroupInput type="url" className="form-control" id="inputUrl" placeholder="Website" required />
                        </BodyLeft3FormWebsiteInputGroup>
                    </BodyLeft3FormWebsiteInputCol>
                    <BodyLeft3FormWebsiteCommentCol>
                        <BodyLeft3FormWebsiteCommentColGroup>
                            <textarea className="form-control2" placeholder="Comment *" name="message" cols="45" rows="8" required />
                        </BodyLeft3FormWebsiteCommentColGroup>
                    </BodyLeft3FormWebsiteCommentCol>
                    <BodyLeft3FormSendButtonCol>
                        <BodyLeft3FormSentButton type="submit" className="button button-a button-big button-rouded">
                            <ButtonH1 type="submit">
                                Send Message
                            </ButtonH1>
                        </BodyLeft3FormSentButton>
                    </BodyLeft3FormSendButtonCol>
                </BodyLeft3FormMFRow>
            </BodyLeft3FormMF>
        </BodyLeft3Wrapper>
    );
}


export default BodyLeft3;