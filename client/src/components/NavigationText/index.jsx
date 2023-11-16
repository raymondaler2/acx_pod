import styled, { css } from "styled-components";
import inter from "./../../assets/inter-900.woff2";
import { Link } from "react-router-dom";

const NavigationText = ({ children, href }) => {
  return (
    <Link to={href} className="font-bold ml-[20px] text-base">
      {children}
    </Link>
  );
};

const Inter = css`
  @font-face {
    font-family: "Inter";
    src: url(${inter}) format("woff2");
    font-weight: bold;
    font-style: normal;
  }
`;

const StyledNavigationText = styled(NavigationText)`
  font-family: ${Inter};
  color: black;
`;

export default StyledNavigationText;
