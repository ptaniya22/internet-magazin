import React from 'react'
import ContentLoader from "react-content-loader"

const UserSkeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={250}
    height={400}
    viewBox="0 0 250 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="45" cy="45" r="45" /> 
    <rect x="0" y="114" rx="0" ry="0" width="80" height="20" /> 
    <rect x="0" y="144" rx="0" ry="0" width="130" height="20" /> 
    <rect x="0" y="215" rx="0" ry="0" width="150" height="25" /> 
    <rect x="0" y="260" rx="0" ry="0" width="150" height="25" /> 
    <rect x="0" y="305" rx="0" ry="0" width="150" height="25" />
  </ContentLoader>
  )
}

export default UserSkeleton