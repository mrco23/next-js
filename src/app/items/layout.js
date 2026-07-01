import React from 'react'

export default function ItemLayout({ children, modal }) {
    return (
        <div>{children} {modal}</div>
    )
}
