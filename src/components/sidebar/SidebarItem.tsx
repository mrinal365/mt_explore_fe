import React from 'react'
import {GlobeHemisphereWest } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
interface Props {
    title: string,
    notificationAmount?: number,
    icon?: React.ReactNode,
    path?: string,
    currentPath?: string
}

const SidebarItem = (props: Props) => {
    const { title = "", notificationAmount, icon, path, currentPath } = props
    const router = useRouter();
    
    // next js function to route
    const navigateToPath = () => {
        if (path) {
            // next js routing
            router.push(path);
        }
    }
    return (
        <li onClick={navigateToPath}>
            <a
                href="#"
                className={`group flex items-center justify-between px-6 py-3 ${currentPath === path ? 'bg-gray-200' : ''} hover:bg-gray-200`}
            >
                <div className="flex items-center gap-2">
                    {
                        icon ? (
                            <div className='h-[32px]  text-[#1b1b1b] flex justify-center items-center'>
                                {icon}
                            </div>
                        ) : null
                    }
                    {
                        title ? (
                            <span className="text-[16px] fo text-[#1b1b1b]">{title}</span>
                        ) : null
                    }
                </div>

                {
                    notificationAmount ?
                        (
                            <div className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                {notificationAmount}
                            </div>
                        )
                        :
                        null
                }
            </a>
        </li>
    )
}

export default SidebarItem