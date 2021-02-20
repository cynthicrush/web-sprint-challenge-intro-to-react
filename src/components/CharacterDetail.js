import React from 'react';
import styled from 'styled-components';

const StyledDivs = styled.div`
    color: ${props => props.theme.white};
    background: ${props => props.theme.gray};
    max-width: 500px;
    text-align: center;
    margin: auto;
    padding: 7px 0;
    border-radius: 7px;
`

const CharacterDetail = (props) => {
    const {info} = props;
    console.log('CharacterDetail', props);
    return (
        <StyledDivs className="App">
            Eye Color: {info.eye_color}<br/>
            Mass: {info.mass}<br/>
            height: {info.height}


            {/* <StyledDivs>
                <span><StyledA href={info.name}>{info.name}</StyledA></span> 
                <StyledSpans>{info.birth_year}</StyledSpans> 
            </StyledDivs> */}
        </StyledDivs>
    );
}
export default CharacterDetail;