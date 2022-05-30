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
  line-height: 76px;

  .log {
    width: 177px;
    height: 69px;
    box-sizing: border-box;
    padding-right: 20px;
    background-image: url(${require("../../assets/img/sprite_01.png")});
    background-position: 0 0;
  }
  .tabWrap {
    position: relative;
    a {
      display: block;
      padding: 0 20px;
      height: 70px;
      text-decoration: none;
      color: #ccc;
    }

    &:hover a,
    a.active {
      color: #fff;
      background-color: #000;
    }

    .active .icon {
      position: absolute;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: 50%;
      transform: translate(-50%, 0);
      background-position: -225px 0;
    }

    :last-of-type a {
      position: relative;
      ::after {
        position: absolute;
        top: 21px;
        left: 100px;
        content: "";
        width: 28px;
        height: 19px;
        background-image: url(${require("../../assets/img/sprite_01.png")});
        background-repeat: no-repeat;
        background-position: -192px 5px;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  height: 69px;
  display: flex;

  .inputWrap {
    margin-top: 19px;
    width: 158px;
    height: 32px;
    border-radius: 32px;
    background-color: #fff;
    background-image: url(${require("../../assets/img/sprite_01.png")});
    background-position: 5px -100px;

    .inputContent {
      margin-top: 8px;
      margin-left: 20px;
      position: relative;

      input {
        position: absolute;
        right: 2px;
        width: 120px;
        height: 16px;
        background: transparent;
        color: #333;
      }
    }
  }

  .creater {
    margin-top: 19px;
    margin-left: 12px;
    button {
      width: 82px;
      height: 30px;
      background-color: #242424;
      color: #ccc;
      border: 1px solid #4f4f4f;
      border-radius: 20px;
    }
  }

  .login {
    margin-top: 19px;
    margin-left: 20px;
    button {
      margin-top: 8px;
      background-color: #242424;
      color: #787878;
    }
  }
`;
