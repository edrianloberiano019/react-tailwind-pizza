import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../libraries/services/action"
import { Link } from "react-router-dom"

const validationSchema = Yup.object({
    username: Yup.string().min(8, "Too Short!").max(16, "Too Long!").required("Required"),
    password: Yup.string().min(8, "Too Short!").max(16, "Too Long!").required("Required"),
})

const Login = () => {
    const initialValues = {
        username: "",
        password: "",
    }

    const dispatch = useDispatch()
    const loginActions = bindActionCreators(actionCreators, dispatch)

    const onSubmit = (params) => {
        loginActions.login(params)
    }

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
            {(formik) => (
                <div className="w-screen h-screen bg-blue-400">
                    {/* <div className="w-full p-10 bg-green-700">{token}</div> */}
                    <div className="flex flex-col items-center justify-center flex-1 h-full px-4 sm:px-0">
                        <div
                            className="flex w-full bg-white rounded-lg shadow-lg sm:w-3/4 lg:w-1/2 sm:mx-0"
                            style={{ height: 500 }}
                        >
                            <div className="flex flex-col w-full p-4 md:w-1/2">
                                <div className="flex flex-col justify-center flex-1 mb-8">
                                    <h1 className="text-4xl font-thin text-center">Welcome Back</h1>
                                    <div className="w-full mt-4">
                                        <Form className="w-3/4 mx-auto form-horizontal">
                                            <div className="flex flex-col mt-4">
                                                <Field
                                                    id="username"
                                                    type="text"
                                                    className="flex-grow h-8 px-2 border rounded border-grey-400"
                                                    name="username"
                                                    placeholder="Username"
                                                    required
                                                />
                                                <ErrorMessage name="username">
                                                    {(errorMsg) => (
                                                        <span className="text-xs text-pink-700">{errorMsg}</span>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="flex flex-col mt-4">
                                                <Field
                                                    id="password"
                                                    type="password"
                                                    className="flex-grow h-8 px-2 border rounded border-grey-400"
                                                    name="password"
                                                    required
                                                    placeholder="Password"
                                                />
                                                <ErrorMessage name="password">
                                                    {(errorMsg) => (
                                                        <span className="text-xs text-pink-700">{errorMsg}</span>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <input type="checkbox" name="remember" id="remember" className="mr-2" />{" "}
                                                <label htmlFor="remember" className="text-sm text-grey-dark">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div className="flex flex-col mt-8">
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </Form>
                                        <div className="mt-4 text-center">
                                            <Link
                                                className="text-xs no-underline hover:underline text-blue-dark"
                                                to="/password-reset"
                                            >
                                                Forgot Your Password?
                                            </Link>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <Link
                                                className="text-xs no-underline hover:underline text-blue-dark"
                                                to="/register"
                                            >
                                                Register
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="hidden rounded-r-lg md:block md:w-1/2"
                                style={{
                                    background:
                                        'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Login
