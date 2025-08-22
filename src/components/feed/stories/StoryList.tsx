import { AVATAR_IMAGES_URL, BEACH_IMAGES_URL } from '@/constants/routes'
import React from 'react'
import Stories from './Stories'

type Props = {}

const StoryList = (props: Props) => {
    const storyListItems =[
        {
            id:1,
            storyImage:BEACH_IMAGES_URL[0],
            profileImage:AVATAR_IMAGES_URL[0],
            seen: false
        },
        {
            id:2,
            storyImage:BEACH_IMAGES_URL[1],
            profileImage:AVATAR_IMAGES_URL[1],
            seen: true
        },
        {
            id:3,
            storyImage:BEACH_IMAGES_URL[2],
            profileImage:AVATAR_IMAGES_URL[2],
            seen: false
        },
        {
            id:4,
            storyImage:BEACH_IMAGES_URL[3],
            profileImage:AVATAR_IMAGES_URL[3],
            seen: true
        },
        {
            id:5,
            storyImage:BEACH_IMAGES_URL[4],
            profileImage:AVATAR_IMAGES_URL[4],
            seen: false
        },
        {
            id:6,
            storyImage:BEACH_IMAGES_URL[5],
            profileImage:AVATAR_IMAGES_URL[5],
            seen: false
        },
        {
            id:7,
            storyImage:BEACH_IMAGES_URL[6],
            profileImage:AVATAR_IMAGES_URL[6],
            seen: false
        },
        {
            id:8,
            storyImage:BEACH_IMAGES_URL[7],
            profileImage:AVATAR_IMAGES_URL[7],
            seen: false
        },
        {
            id:9,
            storyImage:BEACH_IMAGES_URL[8],
            profileImage:AVATAR_IMAGES_URL[8],
            seen: false
        },
        {
            id:10,
            storyImage:BEACH_IMAGES_URL[9],
            profileImage:AVATAR_IMAGES_URL[9],
            seen: false
        },
    ]
    return (
        <div className='flex gap-[13px] no-scrollbar overflow-x-scroll overflow-y-none py-4'>
            {
                storyListItems.map((item) => (
                    <Stories key={item.id} storyImage={item.storyImage} profileImage={item.profileImage} seen={item.seen} />
                ))
            }
        </div>
    )
}

export default StoryList