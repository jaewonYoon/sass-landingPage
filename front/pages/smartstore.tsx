import styled, {css} from 'styled-components';
import process_mb1  from '../public/assets/mobile/process_01.png';
import process_mb2 from '../public/assets/mobile/process_02.png';
import process_mb3 from '../public/assets/mobile/process_03.png';
const Container = styled.div`
    width: 100%;
    height: 848px;
    background-color: #f5f5f5;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #212121;
`;
const Text = styled.p`
    height:24px;
    margin: 48px 0px;  
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    font-stretch
`
const ProcessUl = styled.ul`
    font-weight: 500;
    font-size: 14px;
    & first-child(1):before{
        content: '';
        background-img: url(${process_mb1});
        background-repeat:
    }
`;
const ProcessLi =styled.li`

    & li {
        width: 144px;
        height: 16px;
    }
    ${p => {
        return css`
            first-child(1):before {
                
            }
        `
    }}
    
`;
const Smartstore = () => {
    return(
        <Container>
            <Text>How Does MyMusicTaste Work?</Text>
            <ProcessUl>
                <ProcessLi>MAKE</ProcessLi>
                <ProcessLi>Invite your friends</ProcessLi>
                <ProcessLi>MyMusicTaste contacts artist agency</ProcessLi>
                <ProcessLi>Artist confirms concert</ProcessLi>
                <ProcessLi>Date, venuew, promoter confirmed</ProcessLi>
            </ProcessUl>
        </Container>
    )
}

export default Smartstore; 