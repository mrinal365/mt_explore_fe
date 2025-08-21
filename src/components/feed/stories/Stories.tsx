import React from 'react'

type Props = {
    storyImage: string,
    profileImage: string,
    seen: boolean
}

const Stories = (props: Props) => {
    const { storyImage, profileImage, seen } = props
    return (
        <div className='bg-[#f76f00] p-[4px] flex justify-center items-center rounded-3xl relative'>
            <img   
                className='min-w-[110px] min-h-[140px] w-[110px] h-[140px] rounded-[18px] border-[4px] border-[#ffffff]' 
                src={storyImage}
            />
            <img className='absolute w-[60px] h-[60px] -bottom-[20px] rounded-full border-[4px] border-[#ffffff] object-cover' src={profileImage}/>
        </div>
    )
}

export default Stories