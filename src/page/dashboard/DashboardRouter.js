import React from "react"
import { useParams } from "react-router-dom"

export const DashboardRouter = () => {
    let { page } = useParams()

    return (
        <div>
            <h3>{page}</h3>
        </div>
    )
}
