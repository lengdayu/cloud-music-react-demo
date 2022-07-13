import React, { memo } from "react";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

const Recommend = memo((props) => {
  //组件和redux关联：处理数据和进行操作
  const { topBanners } = useSelector((state) => ({
    topBanners: state.recommend.topBanners,
  }));
  const dispatch = useDispatch();

  //请求数据
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return <div>Recommend:{topBanners.length}</div>;
});

export default Recommend;

// const Recommend = memo((props) => {
//   const { getBanners } = props;

//   useEffect(() => {
//     getBanners();
//     return () => {};
//   }, [getBanners]);

//   return <div>Recommend</div>;
// });

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
