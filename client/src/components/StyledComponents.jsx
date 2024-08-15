import { keyframes, Skeleton, styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
export const VisuallyHiddenInput = styled("input")({
    border: 0,
    height: 1,
    clip: "rect(0,0,0)",
    margin: -1,
    padding: 0,
    width: 1,
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const bounceAnimation = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.5); }
100% { transform: scale(1); }
`;

export const BouncingSkeleton = styled(Skeleton)(() => ({
  animation: `${bounceAnimation} 1s infinite`,
}));