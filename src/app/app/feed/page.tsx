import Feed from '@/pages/feed/Feed'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-[100vh] overflow-y-scroll scroll-none no-scrollbar px-4 pt-6'>
      <Feed />
    </div>
  )
}

export default page