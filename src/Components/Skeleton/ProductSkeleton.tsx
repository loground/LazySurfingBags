import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={620}
    height={420}
    viewBox="0 0 420 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="200" cy="200" r="200" />
  </ContentLoader>
)

export default ProductSkeleton

