import React from 'react'

type Props = {
    label?: string,
    placeholder?: string,
    type?: string,
    required?: boolean,
    name?: string,
    id?: string,
    htmlFor?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: string
}

const Input = (props: Props) => {
    const { label, placeholder, type = "text", required = false, name, id, htmlFor, value, onChange, error } = props
    return (
        <div>
            <div>
                {
                    label && (
                        <label
                            htmlFor={htmlFor}
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            {label}
                        </label>
                    )
                }
                <input
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder={placeholder}
                    required={true}
                />
                {
                    error && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
                    )
                }
            </div>
        </div>
    )
}

export default Input