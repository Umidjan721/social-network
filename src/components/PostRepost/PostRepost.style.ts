import styled from "styled-components";

export const SRepost__wrapper = styled.div`
  border-left: 1px solid ${(props) => props.theme.color.gray};
  padding-left: 30px;
  margin-left: 30px;
  .media-container {
    display: grid;
    gap: 5px;

    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    grid-template-rows: minmax(300px, 400px);
    grid-auto-rows: minmax(300px, 400px);

    border-radius: 20px;
    margin-bottom: 40px;
    overflow: hidden;

    .media__item {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    @media (max-width: 1480px) {
      .media-container {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        grid-template-rows: minmax(100px, 200px);
        grid-auto-rows: minmax(100px, 200px);
      }
    }
  }
`;

export const SPostControls = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto) 2fr;

  justify-content: center;
  align-items: center;

  gap: 15px;

  .icon-wrapper {
    cursor: pointer;
    padding: 10px;
    background-color: ${(props) => props.theme.color.bgc};
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
      background-color: ${(props) => props.theme.color.lightGray};
    }

    .count {
      color: ${(props) => props.theme.color.darkGray};
      font-weight: 400;
    }

    .icon {
      height: 25px;
      overflow: visible;
      fill: transparent;
      transition: 200ms;
    }

    .icon-like {
      stroke: ${(props) => props.theme.color.darkGray};
      stroke-width: 2px;
    }

    .icon-mark {
      stroke: ${(props) => props.theme.color.darkGray};
      stroke-width: 2px;
    }

    &.mark {
      justify-self: self-end;
    }
  }
`;
export const SCommentBlock = styled.div`

  cursor: pointer;
  position: relative;
  list-style: none;

  display: flex;
  gap: 15px;

  margin-top: 20px;
  padding: 15px;
  border-radius: 15px;

  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.color.lightGray};

    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  img {
    flex: 0 0 60px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .comment__description {
    flex: 1 1 auto;

    .comment__owner {
      margin-bottom: 10px;
      display: inline-block;
    }

    .comment__text {
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
      font-weight: 300;
      margin-bottom: 10px;
    }

    .reply {
      color: ${(props) => props.theme.color.primeColor};
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
    }
  }

  .date {
    position: absolute;
    top: 15px;
    right: 15px;
    color: ${(props) => props.theme.color.gray};
    font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
  }

  .icon-like {
    position: absolute;
    bottom: 15px;
    right: 15px;

    overflow: visible;
    width: 22px;

    fill: none;
    stroke: ${(props) => props.theme.color.darkGray};
    stroke-width: 2px;

    transition: 200ms;

    &._active {
      fill: ${(props) => props.theme.color.red};
      stroke: none;
    }

    &:hover {
      stroke: none;
      fill: ${(props) => props.theme.color.primeColor};
    }
  }

`;
