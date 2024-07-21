import React from 'react'

interface BlogDetailsProps{
    params:{
        slug:string[];
    }
}

const BlogDetails = ({params}:BlogDetailsProps) => {
  return (
    <div>BlogDetails  {params.slug[1]}</div>
  )
}

export default BlogDetails