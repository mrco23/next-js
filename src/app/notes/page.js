import React from 'react'
import Link from 'next/link'

export default function NotesPage() {
    return (
        <div className='flex flex-col'>NotesPage
            <Link href="/notes/12">Notes 12</Link>
            <Link href="/">Back</Link>
        </div>
    )
}
