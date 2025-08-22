import { BEACH_IMAGES_URL } from '@/constants/routes'
import { textEllipsis } from '@/utils/utils'
import React from 'react'

type Props = {
    image: string
    title: string
    description: string
}

const CommunityCard = (props: Props) => {
    const { image, title, description } = props
    return (
        <div className='flex gap-2 items-center mt-3'>
            <img src={image} className='h-[60px] min-w-[60px] object-cover rounded-[10px]' />
            <div className='flex flex-col justify-between'>
                <p className='font-medium text-[14px] mb-1'>{textEllipsis(title,28)}</p>
                <div className='flex  gap-4'>
                    <p className='text-[12px] text-[#717070]'>{textEllipsis(description,66)}</p>
                </div>
            </div>
        </div>
    )
}

export default CommunityCard