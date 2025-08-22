'use client'
import React from 'react'
import SidebarItem from './SidebarItem'

import { GlobeHemisphereWest, User, GearSix, Rss } from '@phosphor-icons/react'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/constants/routes'
import { COMMUNITY_LIST } from '@/dummy/feed'
import CommunityCard from '../common/community/CommunityCard'

type Props = {}

const Sidebar = (props: Props) => {
    const sidebarItemList = [
        {
            name: 'Feed',
            icon: <Rss />,
            notificationAmount: 5,
            path: ROUTES.FEED
        },
        {
            name: 'Travel',
            icon: <GlobeHemisphereWest />,
            path: ROUTES.TRAVEL
        },
        {
            name: 'Profile',
            icon: <User />,
            path: ROUTES.PROFILE
        },
        {
            name: 'Settings',
            icon: <GearSix />,
            path: ROUTES.SETTINGS
        }
    ]

    // get route path name using next js
    const pathName = usePathname();


    return (
        <div className='max-w-[290px] bg-[#ffffff] h-[100vh] max-h-[100vh] w-[300px] border-x-[1px] border-[#e5e5e5]'>
            <div className='px-[24px] pt-[30px] flex items-center '>
                <img src={"https://www.licdentalassociates.com/assets/images/restorative-1.jpg"} className='h-[56px] w-[56px] rounded-full object-cover' />
                <div className='pl-[10px] b-r'>
                    <p className='text-black text-[20px] font-medium'>Matt Kearny...</p>
                    <p className='text-[#3d3d3d] text-[16px] font-light'>Nomad Traveler</p>
                </div>
            </div>
            {/* <div className='flex justify-center items-center py-3 px-[24px]'>
                <div className='bg-[black] px-8 py-2 rounded-full cursor-pointer'>
                    <p className='text-white text-[20px]'>Create Post</p>
                </div>
            </div> */}
            <ul className="space-y-1 mt-8">
                {
                    sidebarItemList?.map((item, index) => (
                        <SidebarItem currentPath={pathName as string} key={index} title={item?.name} icon={item?.icon} notificationAmount={item?.notificationAmount} path={item?.path} />
                    ))
                }
            </ul>
           
        </div>
    )
}

export default Sidebar