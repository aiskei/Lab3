import React, { useEffect, useState } from 'react';


const ProductCard = () => {
    const [data, setData] = useState([]);

        //fetch data using useEffect hook
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setData(data)
                    console.log(data)
                })
        }, [])

    return (
        <div>
            ProductCard
        </div>
    );
}

export default ProductCard;
