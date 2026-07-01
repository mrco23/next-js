import React from 'react'

export default async function InterceptSidebar({ params }) {
    const { id } = await params;
    return (
        <div>InterceptSidebar {id}</div>
    )
}
