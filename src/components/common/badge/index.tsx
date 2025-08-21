import React from 'react'

type Props = {
    title: string,
    selected: boolean
}

const Badge = (props: Props) => {
    const { title, selected } = props
    return (
        <div className={`${selected ? 'bg-[#191919]' : 'bg-[none]  text-[#191919]'} px-6 py-[4px] rounded-full cursor-pointer border-[2px] border-[#191919]`}>
            <p className={` ${selected ? 'text-[#ffffff]' : 'text-[#191919]'} text-[16px] font-medium`}>{title}</p>
        </div>
    )
}

export default Badge