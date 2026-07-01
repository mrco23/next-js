import React from 'react'

export default async function DetailNotePage({ params }) {
    const { id } = await params
    return (
        <div>[id] {id}</div>
    )
}
