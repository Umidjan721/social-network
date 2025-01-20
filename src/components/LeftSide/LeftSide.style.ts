import styled from "styled-components";

export const SLeftSide =  styled.div`
    grid-area: L;

    .Navbar {
      margin-bottom: 20px;
    }
    @media (max-width: 730px) {
  .MainPage {
    display: block;

    .LeftSide {
      display: none;
    }
  }
}

`