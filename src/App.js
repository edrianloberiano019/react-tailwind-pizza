import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Hero from "./components/Hero"
import Products from "./components/products/"
import { productData, productDataTwo } from "./components/products/data"
import Feature from "./components/Feature"
import Footer from "./components/Footer"

function App() {
    return (
        <Router>
            <Hero />
            <Products heading="Choose your Plans." data={productData} />
            <Feature />
            <Products heading="Buy Premium Plans to Get Latest Games!" data={productDataTwo} />
            <Footer />
        </Router>
    )
}

export default App
