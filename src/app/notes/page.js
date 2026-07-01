import React from 'react'
import Link from 'next/link'

export default async function NotesPage({ searchParams }) {
    const params = await searchParams;
    const { message } = params
    return (
        <div className='flex flex-col'>
            NotesPage
            <Link href="/notes/12">Notes 12</Link>
            <Link href="/">Back</Link>

            <p className='text-xl'>search params: {message}</p>
            <p>gunakan params = ?message=</p>
        </div>
    )
}
