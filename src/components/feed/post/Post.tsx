'use client'
import { AVATAR_IMAGES_URL } from '@/constants/routes'
import { textEllipsis } from '@/utils/utils'
import { CrownSimpleIcon, HeartIcon, SealCheckIcon, ShareNetworkIcon } from '@phosphor-icons/react'
import React from 'react'

type Props = {
    postImage: string
}

const Post = (props: Props) => {
    const { postImage } = props
    return (
        <div className='rounded-[18px]  border-[1px] border-[#e5e5e5] bg-white mt-[16px] p-[16px] w-[100%]  max-w-[680px]'>
            <div className='flex gap-4'>
                <div className='relative w-fit'>
                    <img className='w-[50px] h-[50px] object-cover rounded-[10px]' src={AVATAR_IMAGES_URL[0]} />
                    <div className='absolute -right-[6px] -bottom-[6px] rounded-full h-[18px] w-[18px] border-[2px] border-white bg-green-700'>

                    </div>

                </div>
                <div>
                    <div className='flex gap-1 items-center'>
                        <p className='font-semibold'>Kate Huoston</p><SealCheckIcon size={20} weight='fill' color='#0fa3f1' />
                    </div>
                    <p className='text-gray-700'>Manglutan, Andaman</p>
                </div>
            </div>
            <p className='font-regular py-2 font-[400] text-[16px]'>{textEllipsis("Some of the unique views from the unexplored manglutan, Some of the unique views from the unexplored manglutan Some of the unique views from the unexplored manglutan, Some of the unique views from the unexplored manglutan, Some of the unique views from the unexplored manglutan, Some of the unique views from the unexplored manglutan",300)}</p>
            <img className='w-[100%] max-w-[700px] h-[319px] object-cover rounded-[10px]' src={postImage} />
            <div className='mt-[10px]'>
                <div className='flex justify-between items-center  mb-[10px]'>
                    <div className='flex gap-4 items-center'>
                        <div>
                            <HeartIcon size={24}/>
                        </div>
                        <div>
                            <ShareNetworkIcon size={24}/>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='flex gap-2 items-center text-[#717070]'>
                        <p>2 hrs ago</p>
                        <p>.</p>
                        <p>928 likes</p>
                        <p>.</p>
                        <p>102 comments</p>
                    </div>
                </div>
                <div className='bg-[#F3F3F3] rounded-[10px] border-[1px] border-[#e5e5e5] px-4 py-2'>
                    <input placeholder='Ad a comment...'/>
                </div>
            </div>
        </div>
    )
}

export default Post