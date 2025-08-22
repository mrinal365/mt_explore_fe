import React from 'react'

type Props = {
    title: string,
    selected: boolean
}

const Badge = (props: Props) => {
    const { title, selected } = props
    return (
        <div className={`${selected ? 'bg-[#191919]' : 'bg-[none]  text-[#191919]'} px-4 py-[3px] rounded-full cursor-pointer border-[1px] border-[#191919]`}>
            <p className={` ${selected ? 'text-[#ffffff]' : 'text-[#191919]'} text-[14px] font-regular`}>{title}</p>
        </div>
    )
}

export default Badge