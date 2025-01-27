import styled from "styled-components";

export const SLoginPage = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.color.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.elemsBgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid ${(props) => props.theme.color.disabledBgc};
    background-color: transparent;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
      border-color: ${(props) => props.theme.color.primeColor};
    }
  }

  button {
    width: 100%;
    margin-bottom: 30px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: var(--gray);

    &:hover {
      text-decoration: underline;
    }
  } 

@media (max-width: 530px) {
  .LoginPage {
    width: 100%;
  }
}

.registration {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.color.lightGray};

  span {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 40px;

    a {
      display: inline;
      color: ${(props) => props.theme.color.primeColor};
    }
  }

  p {
    margin-bottom: 30px;
  }
}
.icons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.icon {
  width: 100%;
  height: 100%;
}
.reg__link {
  flex: 0 0 58px;
  transition: 200ms;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
    transition: 100ms;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
`