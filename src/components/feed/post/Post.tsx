import { AVATAR_IMAGES_URL } from '@/constants/routes'
import React from 'react'

type Props = {
    postImage: string
}

const Post = (props: Props) => {
    const { postImage } = props
    return (
        <div className='rounded-[18px]  border-[1px] border-[#e5e5e5] bg-white mt-[16px] p-[16px] w-fit '>
            <div className='flex gap-4'>
                <div className='relative w-fit'>
                    <img className='w-[50px] h-[50px] object-cover rounded-[10px]' src={AVATAR_IMAGES_URL[0]} />
                    <div className='absolute -right-[6px] -bottom-[6px] rounded-full h-[18px] w-[18px] border-[2px] border-white bg-green-700'>

                    </div>

                </div>
                <div>
                    <p className='font-semibold'>Mrinal Tewary</p>
                    <p className='text-gray-700'>Manglutan, Andaman</p>
                </div>
            </div>
            <p className='font-regular py-2 font-[400] text-[16px]'>Some of the unique views from the unexplored manglutan</p>
            <img className='w-[600px] max-w-[750px] h-[319px] object-cover rounded-[10px]' src={postImage} />
            <div className='mt-[18px]'>
                <div>

                </div>
                <div className='bg-[#F3F3F3] rounded-[18px] border-[1px] border-[#e5e5e5] px-4 py-2'>

                </div>
            </div>
        </div>
    )
}

export default Post