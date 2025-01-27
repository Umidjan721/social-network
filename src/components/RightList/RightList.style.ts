import styled from "styled-components";


export const SRightList = styled.div`
box-shadow: 0 0 10px ${props => props.theme.color.lightGray};
  background-color: ${props=> props.theme.color.elemsBgc};
  border-radius: 20px;
  padding: calc(1vw + 11px);

  &__title {
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 1100px) {
      .List {
        display: none;
      }
    }
`;