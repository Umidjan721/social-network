import styled from "styled-components"

export const SAppButoon = styled.button`
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;

  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.primeColor};
  color: white;
  transition: 200ms;

  &:disabled {
    background-color: ${(props) => props.theme.color.disabledBgc};
  }

  &.primary {
    background-color: ${(props) => props.theme.color.primeColor};
    color: white;
  }

  &.secondary {
    background-color: ${(props) => props.theme.color.lightGray};
    color: ${(props) => props.theme.color.placeholderColor};
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
    width: 100%;
    margin-bottom: 30px;

    width: 100%;
    margin-bottom: 30px;
    @media (max-width: 730px)  {
    padding: 10px 12px;
  }
`;