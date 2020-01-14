import React from 'react'

type Props = {
    text: string;
    kind?: string;
    type?: string;
    link?: string;
}

export const Button:React.FC<Props> = ({text, link , type , kind = 'btn btn-primary'}) => {
    return (
        <button type={'button'} className={kind} value={text}  >
            {text}
        </button>
    )
}
