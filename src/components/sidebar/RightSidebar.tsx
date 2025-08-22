'use client'
import { AVATAR_IMAGES_URL, BEACH_IMAGES_URL } from '@/constants/routes'
import { COMMUNITY_LIST } from '@/dummy/feed'
import React from 'react'
import CommunityCard from '../common/community/CommunityCard'
import { textEllipsis } from '@/utils/utils'
import { NewspaperClippingIcon, UserPlusIcon } from '@phosphor-icons/react'

type Props = {}

const RightSidebar = (props: Props) => {
    return (
        <div className='max-w-[300px] bg-[#ffffff] h-[100vh] max-h-[100vh] overflow-y-scroll w-[300px] border-x-[1px] no-scrollbar  border-[#e5e5e5] px-4 py-6'>

            <p className='text-[20px] font-medium mb-0 mt-0'>Trending News</p>

            {
                AVATAR_IMAGES_URL.slice(0, 4).map((image, index) => (
                    <div className='flex gap-2 items-center mt-3'>
                        {/* <img src={image} className='h-[30px] w-[30px] max-w-[30px] object-cover rounded-[100px]' /> */}
                        <div className='flex gap-1 justify-between items-center'>
                            <NewspaperClippingIcon weight="thin" size={24} />
                            <p className='font-regular text-[14px] '>{textEllipsis("Aneez Sharma Joins BJP inspite of differences", 36)}</p>

                        </div>
                    </div>
                ))
            }

            <p className='text-[20px] font-medium mb-0 mt-6'>Communities</p>

            {
                COMMUNITY_LIST.map((community, index) => (
                    <div className='flex gap-2 items-center mt-3'>
                        <img src={BEACH_IMAGES_URL[index]} className='h-[30px] min-w-[30px] object-cover rounded-[10px]' />
                        <div className='flex gap-6 justify-between items-center'>
                            <p className='font-regular text-[14px] '>{textEllipsis("Birds of paradise in Manglutan", 22)}</p>
                            <div className='text-[12px]'>
                                JOIN
                            </div>
                        </div>
                    </div>
                ))
            }
            <p className='text-[20px] font-medium mb-0 mt-6'>Trending People</p>

            {
                AVATAR_IMAGES_URL.map((image, index) => (
                    <div className='flex justify-between gap-2 items-center mt-3'>
                        <div className='flex justify-between items-center gap-2'>
                            <img src={image} className='h-[30px] w-[30px] max-w-[30px] object-cover rounded-[100px]' />
                            <p className='font-regular text-[14px] '>{textEllipsis("Aush Pathan Kureshi Aneez Sharma", 22)}</p>
                        </div>
                        <div className='text-[12px] pr-6'>
                            <UserPlusIcon weight='thin' size={24} />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default RightSidebar