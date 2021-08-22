import { Fragment, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { loginActionCreators } from "../../libraries/services/action"
import SelectDropdown from "../SelectDropdown"
import accountStatus from "../../libraries/logicJsx/accountStatus"
import rolesIcon from "../../libraries/logicJsx/rolesIcon"

const validationSchema = Yup.object({
    username: Yup.string().min(8, "Too Short!").max(16, "Too Long!").required("Required"),
    password: Yup.string().min(8, "Too Short!").max(16, "Too Long!").required("Required"),
    name_first: Yup.string().min(2, "Too Short!").max(16, "Too Long!").required("Required"),
    name_last: Yup.string().min(3, "Too Short!").max(16, "Too Long!").required("Required"),
    email: Yup.string().email("This is not a valid Email").required("Required"),
})

const UsersModal = ({ isOpen, toggleOpen }) => {
    const cancelButtonRef = useRef(null)

    const accountStatusData = [
        { name: "Pending", avatar: "pending" },
        { name: "Approved", avatar: "approved" },
        { name: "Declined", avatar: "declined" },
    ]
    const role = [
        { name: "Developer", avatar: "developer" },
        { name: "Encoder", avatar: "encoder" },
        { name: "Admin", avatar: "admin" },
    ]

    const initialValues = {
        username: "",
        password: "",
        name_first: "",
        name_middle: "",
        name_last: "",
        email: "",
    }

    const dispatch = useDispatch()
    const loginActions = bindActionCreators(loginActionCreators, dispatch)

    const onSubmit = (params) => {
        loginActions.register(params)
        console.log(params)
    }

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                auto-reopen="true"
                className="fixed inset-0 z-50 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={toggleOpen}
            >
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block w-full overflow-visible text-left align-bottom transition-all transform rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg">
                            <div className="flex items-center justify-center">
                                <div className="absolute flex items-center justify-center top-3 sm:top-12">
                                    <img
                                        className="object-cover w-20 h-20 rounded-full"
                                        src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                                        alt="asd"
                                    />

                                    <div className="absolute w-20 h-20 bg-[rgba(0,0,0,0.3)] rounded-full opacity-0 hover:opacity-100 cursor-pointer">
                                        <div className="absolute text-xs text-white top-8 left-1 ">Upload Image</div>
                                    </div>
                                </div>
                                <div className="w-full bg-blue-400 rounded-lg">
                                    <div className="flex items-baseline justify-between w-full h-24 px-3 py-5">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                                            Edit Profile
                                        </Dialog.Title>
                                        <button onClick={toggleOpen} className="pr-3">
                                            <i className="w-6 h-6 text-white cursor-pointer fas fa-times hover:text-blue-500"></i>
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center justify-around w-full bg-white rounded-t-md bg-gray-50">
                                        <div className="flex items-center justify-between w-full px-4 pt-2 mb-3 sm:mb-0">
                                            <div className="w-full sm:max-w-[150px]">
                                                <SelectDropdown data={accountStatusData} icons={accountStatus} />
                                            </div>
                                            {/* <div className="flex flex-col items-center justify-center">
                                                <h1 className="text-xs text-gray-500">Spent</h1>
                                                <h1 className="text-sm text-gray-600">$2,004</h1>
                                            </div> */}
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-full">
                                            <h1 className="font-bold text-gray-700">Maria R.</h1>
                                            {/* <h1 className="text-sm text-gray-500 ">New York, USA</h1> */}
                                            <Formik
                                                onSubmit={onSubmit}
                                                initialValues={initialValues}
                                                validationSchema={validationSchema}
                                            >
                                                {(formik) => (
                                                    <Form>
                                                        <div className="flex mx-3">
                                                            <div className="w-full px-1 mb-5">
                                                                <label className="px-1 text-xs font-semibold">
                                                                    Email
                                                                </label>
                                                                <div className="flex flex-col">
                                                                    <Field
                                                                        id="email"
                                                                        name="email"
                                                                        type="email"
                                                                        className="w-full py-2 pl-3 pr-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                                                                        placeholder="johnsmith@example.com"
                                                                    />
                                                                    <ErrorMessage name="email">
                                                                        {(errorMsg) => (
                                                                            <span className="pl-2 text-xs text-pink-700">
                                                                                {errorMsg}
                                                                            </span>
                                                                        )}
                                                                    </ErrorMessage>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex mx-3">
                                                            <div className="w-1/2 px-1 mb-5">
                                                                <label className="px-1 text-xs font-semibold">
                                                                    Username
                                                                </label>
                                                                <div className="flex flex-col">
                                                                    <Field
                                                                        id="username"
                                                                        name="username"
                                                                        type="text"
                                                                        className="w-full py-2 pl-3 pr-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                                                                        placeholder="John Carl"
                                                                    />
                                                                    <ErrorMessage name="username">
                                                                        {(errorMsg) => (
                                                                            <span className="pl-2 text-xs text-pink-700">
                                                                                {errorMsg}
                                                                            </span>
                                                                        )}
                                                                    </ErrorMessage>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/2 px-1 mb-5">
                                                                <label className="px-1 text-xs font-semibold">
                                                                    Password
                                                                </label>
                                                                <div className="flex flex-col">
                                                                    <Field
                                                                        id="password"
                                                                        name="password"
                                                                        type="password"
                                                                        className="w-full py-2 pl-3 pr-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                                                                        placeholder="************"
                                                                    />
                                                                    <ErrorMessage name="password">
                                                                        {(errorMsg) => (
                                                                            <span className="pl-2 text-xs text-pink-700">
                                                                                {errorMsg}
                                                                            </span>
                                                                        )}
                                                                    </ErrorMessage>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mx-4 mb-4">
                                                            <label className="px-1 text-xs font-semibold">Role</label>
                                                            <SelectDropdown data={role} icons={rolesIcon} />
                                                        </div>
                                                        <label className="px-1 mx-5 text-sm font-semibold ">
                                                            System Access
                                                        </label>
                                                        <div className="flex flex-wrap mx-3">
                                                            <label className="inline-flex items-center mx-3 my-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-5 h-5 border-2 rounded-full appearance-none checked:bg-green-600 checked:border-transparent"
                                                                    defaultChecked
                                                                />
                                                                <span className="ml-2 text-gray-700">Home</span>
                                                            </label>
                                                            <label className="inline-flex items-center mx-3 my-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-5 h-5 border-2 rounded-full appearance-none checked:bg-red-600 checked:border-transparent"
                                                                    defaultChecked
                                                                />
                                                                <span className="ml-2 text-gray-700">Page</span>
                                                            </label>
                                                            <label className="inline-flex items-center mx-3 my-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-5 h-5 border-2 rounded-full appearance-none checked:bg-blue-600 checked:border-transparent"
                                                                    defaultChecked
                                                                />
                                                                <span className="ml-2 text-gray-700">
                                                                    User Management
                                                                </span>
                                                            </label>
                                                            <label className="inline-flex items-center mx-3 my-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-5 h-5 border-2 rounded-full appearance-none checked:bg-pink-600 checked:border-transparent"
                                                                    defaultChecked
                                                                />
                                                                <span className="ml-2 text-gray-700">Logout</span>
                                                            </label>
                                                            <label className="inline-flex items-center mx-3 my-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-5 h-5 border-2 rounded-full appearance-none checked:bg-pink-600 checked:border-transparent"
                                                                    defaultChecked
                                                                />
                                                                <span className="ml-2 text-gray-700">Logout</span>
                                                            </label>
                                                            <label className="inline-flex items-center mx-3 my-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-5 h-5 border-2 rounded-full appearance-none checked:bg-pink-600 checked:border-transparent"
                                                                    defaultChecked
                                                                />
                                                                <span className="ml-2 text-gray-700">Logout</span>
                                                            </label>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={toggleOpen}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={toggleOpen}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default UsersModal
