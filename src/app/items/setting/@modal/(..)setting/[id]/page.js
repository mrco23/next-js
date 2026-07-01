import React from 'react'

export default async function SettingDetailPage({ params }) {
    const { id } = await params;
    return (
        <div>{id}</div>
    )
}
