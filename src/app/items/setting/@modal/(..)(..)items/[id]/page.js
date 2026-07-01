import React from 'react'

export default async function ModalItems({ params }) {
    const { id } = await params;
    return (
        <div>itercept items: {id}</div>
    )
}
