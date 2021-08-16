import React from "react"

const Login = () => {
    return (
        <div className="w-screen h-screen bg-blue-400">
            <div className="flex flex-col items-center justify-center flex-1 h-full px-4 sm:px-0">
                <div
                    className="flex w-full bg-white rounded-lg shadow-lg sm:w-3/4 lg:w-1/2 sm:mx-0"
                    style={{ height: 500 }}
                >
                    <div className="flex flex-col w-full p-4 md:w-1/2">
                        <div className="flex flex-col justify-center flex-1 mb-8">
                            <h1 className="text-4xl font-thin text-center">Welcome Back</h1>
                            <div className="w-full mt-4">
                                <form className="w-3/4 mx-auto form-horizontal" method="POST" action="#">
                                    <div className="flex flex-col mt-4">
                                        <input
                                            id="email"
                                            type="text"
                                            className="flex-grow h-8 px-2 border rounded border-grey-400"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="flex flex-col mt-4">
                                        <input
                                            id="password"
                                            type="password"
                                            className="flex-grow h-8 px-2 border rounded border-grey-400"
                                            name="password"
                                            required
                                            placeholder="Password"
                                        />
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
                                </form>
                                <div className="mt-4 text-center">
                                    <a
                                        className="text-xs no-underline hover:underline text-blue-dark"
                                        href="{{ route('password.request') }}"
                                    >
                                        Forgot Your Password?
                                    </a>
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
    )
}

export default Login
