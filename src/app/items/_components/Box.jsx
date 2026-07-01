"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
export default function Box() {
    const searchParams = useSearchParams();
    const q = searchParams.get("q");
    return (
        <div className="p-2 border">
            INI COMPONENT BOX
            <p>search params: {q}</p>
        </div>
    );
}
