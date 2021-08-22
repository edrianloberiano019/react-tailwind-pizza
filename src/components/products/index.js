import React from "react"

const Products = ({ heading, data }) => {
    return (
        <div className="min-h-screen px-20 py-[calc((100vw-1300px)/2)] bg-[#150f0f] text-[#fff]">
            <h1 className="text-[length:clamp(2rem,2.5vw,3rem)] text-center mb-20">{heading}</h1>
            <div className="flex flex-wrap justify-center mx-0 my-auto">
                {data.map((product, index) => {
                    return (
                        <div className="mx-0 my-8 leading-loose w-[300px]" key={index}>
                            <img
                                className="h-[300px] min-w-[300px] max-w-full rounded-[10rem] transition duration-300 hover:transform hover:scale-150"
                                src={product.img}
                                alt={product.alt}
                            />
                            <div className="flex flex-col items-center justify-center p-8 text-center">
                                <h2 className="text-2xl font-normal">{product.name}</h2>
                                <p className="mb-8">{product.desc}</p>
                                <p className="mb-8 text-[2rem]">{product.price}</p>
                                <button className="text-base px-4 py-14 border-none bg-[#e31837] text-[#fff] transition duration-500  ease-out hover:bg-[#ffc500] cursor-pointer text-black">
                                    {product.button}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products
