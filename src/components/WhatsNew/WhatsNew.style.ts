import styled from "styled-components";


export const SWhatsNew = styled.div`
  box-shadow: 0 0 10px ${(props)=> props.theme.color.lightGray};
  background-color: ${(props)=> props.theme.color.elemsBgc};
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  gap: 10px;

  img {
    flex: 0 0 40px;
    border-radius: 50%;
    height: 40px;
    object-fit: cover;
  }

  input {
    flex: 1 1 auto;
    background: transparent;
  }

  .icons-wrapper {
    flex: 0 1 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    .icon {
      cursor: pointer;
      flex: 0 0 24px;
      width: 24px;
      border: 1px solid transparent;
      border-radius: 10px;
      fill: ${(props)=> props.theme.color.primeColor};
      padding: 10px;
      box-sizing: content-box;

      transition: 200ms;

      &:hover {
        border-color: ${(props)=> props.theme.color.lightGray};
        background-color: ${(props)=> props.theme.color.bgc};
      }

      &:active {
        transition: 100ms;
        background-color: ${(props)=> props.theme.color.primeColor};
        fill: white;
      }
    }
  }
  @media (max-width: 730px) {
    padding: 10px 15px;
  }

`;