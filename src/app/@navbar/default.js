import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='flex gap-6 mx-auto my-2 text-xl'>
            <Link href="/">/</Link>
            <Link href="/notes">Notes</Link>
            <Link href="/items">items</Link>
        </div>
    )
}
