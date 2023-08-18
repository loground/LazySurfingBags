import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={600}
    height={600}
    viewBox="0 0 600 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="301" cy="263" r="255" />
  </ContentLoader>
)

export default ProductSkeleton
