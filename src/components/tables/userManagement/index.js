import React from "react"
import { useEffect } from "react"
import TableColumns from "./TableColumns"

import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { usersActionCreators } from "../../../libraries/services/action"

const Table = () => {
    const token = useSelector((state) => state.loginReducer.token)
    const usersState = useSelector((state) => state.usersReducer)
    console.log(usersState)
    const dispatch = useDispatch()
    const usersActions = bindActionCreators(usersActionCreators, dispatch)
    useEffect(() => {
        usersActions.initData(token)
    }, [])

    return (
        <div className="py-2 mt-3 -my-2 overflow-x-auto">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow-md sm:rounded-lg">
                <table className="min-w-full mt-4">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Name
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Access
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Pending
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Role
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {usersState.map((item, index) => {
                            return <TableColumns data={item} key={index} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
