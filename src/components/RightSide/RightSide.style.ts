import styled from "styled-components";


export const SRightSide = styled.div`
    grid-area: R;
    .List {
      margin-bottom: 20px;
    }
  
@media (max-width: 1440px) {
  .MainPage {
    grid-template-areas: "L M";
    grid-template-columns: 290px auto;
    display: none;
  }
}
`;