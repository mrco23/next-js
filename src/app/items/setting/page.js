import React from 'react'
import Link from 'next/link'

export default function SettingPage() {
    return (
        <div className='flex flex-col'>
            SettingPage
            <Link href={'/items/setting/12'}>items setting 12</Link>
            <Link href={'/items/12'}>items 12</Link>
        </div>
    )
}
