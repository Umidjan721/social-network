import styled, { css } from "styled-components";

interface SPostProps{
    $isLiked:Boolean;
    $isMarked:Boolean;
}

export const SPost = styled.div<SPostProps>`
  box-shadow: 0 0 10px ${props=>props.theme.color.lightGray};
  padding: calc(1vw + 11px);
  background-color: ${props=>props.theme.color.elemsBgc};
  border-radius: 20px; 
  margin-bottom: 20px;

  position: relative;
  ${(props) => 
   props.$isLiked &&
   css`
   .icon-wrapper {
    .icon-like{
        fill: ${(props) => props.theme.color.red};
        stroke: 0;
        stroke-width: 0;
    }
    .likes-count {
        color: ${(props) => props.theme.color.red};
    }
   }
   `}
  ${(props) => 
   props.$isMarked &&
   css`
   .icon-wrapper {
    .icon-mark{
        fill: ${(props) => props.theme.color.primeColor};
        stroke: 0;
        stroke-width: 0;
    }
   }
   `}
  &__text {
    margin-bottom: 20px;
  }
`