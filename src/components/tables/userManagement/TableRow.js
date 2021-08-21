import React from "react"

const TableRow = ({ data }) => {
    return (
        <tr className="cursor-pointer hover:bg-gray-300">
            <td className="py-4 pl-6 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="123asd"
                        />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium leading-5 text-gray-900 capitalize">{data.name}</div>
                        <div className="text-sm leading-5 text-gray-500">{data.email}</div>
                    </div>
                </div>
            </td>
            <td className="py-4 pl-6 border-b border-gray-200">
                <span className="inline-flex px-2 mx-0 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    zxc
                </span>
            </td>
            <td className="py-4 pl-6 whitespace-no-wrap border-b border-gray-200">
                <span
                    className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full uppercase
                                ${
                                    data.pending === "approved"
                                        ? "text-green-800 bg-green-100"
                                        : "text-red-800 bg-red-100"
                                }`}
                >
                    {data.pending}
                </span>
            </td>
            <td className="py-4 pl-6 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                {data.type}
            </td>
            <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                <div className="text-indigo-600 hover:text-indigo-900">
                    <i className="fas fa-edit"></i>
                </div>
            </td>
        </tr>
    )
}

export default TableRow
