import React from 'react'

function ProductInfo({product}) {
    return (
        <div>
            <p>Available for shipment exclusively within the Sweden.</p>
            <h2>{product.title}</h2>
            <p>{product.price + ' SEK'}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductInfo
