import { Children } from '@/types/Types'
import React from 'react'

function Container({children}:Children) {
  return (
    <div  className="container mx-auto justify-center items-center flex flex-col mt-11">
      {children}
    </div>
  )
}

export default Container
