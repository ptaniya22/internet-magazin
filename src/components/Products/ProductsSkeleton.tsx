import React from 'react'
import ContentLoader from "react-content-loader"

const ProductsSkeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={400}
    height={270}
    viewBox="0 0 100% 100%"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="20" ry="20" width="400" height="170" /> 
    <rect x="0" y="190" rx="0" ry="0" width="150" height="30" /> 
    <rect x="0" y="240" rx="0" ry="0" width="250" height="30" />
  </ContentLoader>
  )
}

export default ProductsSkeleton