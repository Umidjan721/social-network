import styled from "styled-components";

export const SErrorText = styled.p`
color: ${props=>props.theme.color.red};
margin-top: 10px;
`
export const SAppInput = styled.input`
border: 1px solid transparent;
outline:0;
font-family: inherit;

color: ${props=>props.theme.color.red};
margin-top: 10px;

padding: 12px 15px;
background-color: ${(props) => props.theme.color.elemsBgc};
border-radius:10px;
border: 1px solid transparent;

transition: 200ms;

&:is(:hover, :focus){
     border-color: ${(props) => props.theme.color.primeColor};
}

display: block;
width: 100%;
margin-bottom: 20px;
border: 2px solid ${(props) => props.theme.color.disabledBgc};
background-color: transparent;

&:last-child {
  margin-bottom: 40px;
}

&:is(:hover, :focus){
    border-color: ${(props) => props.theme.color.primeColor};
}
@media (max-width: 730px) {
     padding: 10px 12px;
}

`;
