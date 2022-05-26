import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  .log {
    width: 177px;
    height: 69px;
    box-sizing: border-box;
    padding-right: 20px;
    background-image: url(${require("../../assets/img/sprite_01.png")});
    background-position: 0 0;
  }
  .tabWrap {
    padding: 0 19px;
    a {
      display: block;
      padding: 20px 0;
      text-decoration: none;
      line-height: 36px;
      color: #ccc;
    }
  }
`;

export const HeaderRight = styled.div`
  height: 69px;
`;
