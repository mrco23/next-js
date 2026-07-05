import React from 'react'

export default async function DetailItemsPage({ params }:PageProps<'/items/[uid]'>) {
    const { uid } = await params;
    return (
        <div>DetailItemsPage :{uid}</div>
    )
}
