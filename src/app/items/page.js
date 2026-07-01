import React from 'react'
import Link from "next/link"
export default function ItemsPage() {
    return (
        <div className="flex flex-col">
            ItemsPage
            <Link href="/items/setting">go to setting</Link>
            <Link href="/items/12">go to items 12</Link>
        </div>
    )
}
