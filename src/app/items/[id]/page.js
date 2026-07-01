import React from 'react'

export default async function DetailItemsPage({ params }) {
    const { id } = await params;
    return (
        <div>DetailItemsPage :{id}</div>
    )
}
