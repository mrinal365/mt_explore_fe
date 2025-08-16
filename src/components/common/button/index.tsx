import React from 'react'

type Props = {
    htmlType?: string,
    title?: string
}

const Button = (props: Props) => {
    const { htmlType ="button", title =""  } = props
    return (
        <div>
            <button
                // type={htmlType}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-black"
            >
                { title ? title : "" }
            </button>
        </div>
    )
}

export default Button