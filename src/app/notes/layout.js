import React from 'react'

export default function NotesLayout({ children, sidebar }) {
    return (
        <div className='grid grid-cols-4'>
            {sidebar}
            {children}
        </div>
    )
}
