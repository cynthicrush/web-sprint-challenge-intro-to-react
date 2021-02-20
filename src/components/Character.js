// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';
import CharacterDetail from './CharacterDetail';

const StyledDivs = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    max-width: 500px;
    margin: 17px auto;
    padding: 7px 3px;
    color: ${props => props.theme.white};
    border: ${props => props.theme.border};
    &:hover {
        background: ${props => props.theme.white};
        transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
    
`
const StyledA = styled.a`
    text-decoration: none;
    color: ${props => props.theme.white};    
    &:hover {
        color: ${props => props.theme.green};
        transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
`

const StyledSpans = styled.span`
    background: ${props => props.theme.gray};
    border-radius: 10px;
    padding: 0 5px;
`

const Character = (props) => {
    const [showDetail, setShowDetail] = useState(false);
    const {info} = props;
    console.log('characters', props);
    
    let detail;
    if (showDetail) {
        detail = <CharacterDetail info={info} />;
    } else {
        detail = null;
    }

    return (
        <div className="App">
            <StyledDivs onClick={() => setShowDetail(!showDetail)}>
                <span><StyledA>{info.name}</StyledA></span> 
                <StyledSpans>{info.birth_year}</StyledSpans> 
            </StyledDivs>
            {detail}
        </div>

    );
}
export default Character;