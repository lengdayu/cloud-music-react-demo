import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #c20c0c;
  .list {
    width: 744px;
    height: 30px;
    display: flex;
    margin: 0 auto;

    &-item {
      width: 84px;
      height: 34px;
      padding: 0 6px;
      margin-bottom: 1px;
      display: flex;
      justify-content: center;

      a {
        height: 20px;
        color: #fff;
        font-size: 12px;
        display: block;
        margin: 2px 2px 0;
        box-sizing: border-box;
        padding: 4px 13px 0;
        text-align: center;
        text-decoration: none;
      }

      a:hover,
      a.active {
        border-radius: 20px;
        background-color: #9b0909;
      }
    }
  }
`;
