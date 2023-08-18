import React from "react"
import ContentLoader from "react-content-loader";

const SkeletonCart = () => (
  <ContentLoader 
    speed={2}
    width={220}
    height={620}
    viewBox="0 0 220 620"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="220" height="500" /> 
    <rect x="2" y="521" rx="11" ry="11" width="216" height="42" /> 
    <rect x="0" y="571" rx="10" ry="10" width="229" height="30" />
  </ContentLoader>
)

export default SkeletonCart;
