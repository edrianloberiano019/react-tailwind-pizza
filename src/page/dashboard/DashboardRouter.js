import React from "react"
import { useParams } from "react-router-dom"
import UserManagement from "./UserManagement"

export const DashboardRouter = () => {
    let { page } = useParams()

    return <>{page === "usermanagement" && <UserManagement />}</>
}
