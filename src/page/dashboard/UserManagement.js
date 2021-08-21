import React, { useState } from "react"
import UsersModal from "../../components/modals/UsersModal"
import Table from "../../components/tables/userManagement"

const UserManagement = () => {
    const [isUserModalOpen, setUserModalOpen] = useState(false)
    const toggleUserModal = (params) => {
        setUserModalOpen(!isUserModalOpen)
        console.log(isUserModalOpen)
    }
    return (
        <div>
            <UsersModal isOpen={isUserModalOpen} toggleOpen={toggleUserModal} />
            <div
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
                onClick={toggleUserModal}
            >
                Show Modal
            </div>
            <h1 className="text-3xl font-medium text-black text-shadow-sm">User Management</h1>
            <Table />
        </div>
    )
}

export default UserManagement
