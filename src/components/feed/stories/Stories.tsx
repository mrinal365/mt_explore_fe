import React from 'react'

type Props = {
    storyImage: string,
    profileImage: string,
    seen: boolean
}

const Stories = (props: Props) => {
    const { storyImage, profileImage, seen } = props
    return (
        <div className=' flex justify-center items-center rounded-[18px] relative'>
            <img   
                className='min-w-[90px] min-h-[120px] w-[100px] h-[120px] border-[2px] border-[#000000] rounded-[16px] ' 
                src={storyImage}
            />
            <img className='absolute w-[40px] h-[40px] -bottom-[20px] rounded-full border-[2px] border-[#ffffff] object-cover' src={profileImage}/>
        </div>
    )
}

export default Stories