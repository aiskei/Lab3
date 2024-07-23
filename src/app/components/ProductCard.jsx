import React, { useEffect, useState } from 'react'
import ProductInfo from './ProductInfo';
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material'

const ProductCard = () => {
    const [data, setData] = useState([]);
    const [showProductDetails, setProductDetails] = useState(false);
    const [show, setShow] = useState(false);
    const [item, setItem] = useState(null);



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

    const handleClick = () => {
        setProductDetails(!showProductDetails)
        setShow(!show)
    }

    return (
        <Container>
            <>
                <Grid container m={3}>
                    {data.map(function (product) {
                        return (
                            <Grid
                                key={product.id}
                                item
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <Card
                                raised
                                    sx={{
                                        maxWidth: 355,
                                        margin: "0 auto",
                                        padding: "0.1em",
                                    }}
                                >
                                    <CardMedia onClick={handleClick}
                                        component="img"
                                        height="250"
                                        image={product.image}
                                        alt={"alt"}
                                        sx={{ margin: "1em 1em 0 1em", objectFit: "contain" }}
                                        title="green iguana"
                                    />
                                </Card>

                                { showProductDetails ? <ProductInfo product={product} /> : ""}

                               <>
                               {!show &&
                               <Typography
                                    marginLeft={4} pt={2}
                                    gutterBottom

                                >
                                    {product.title}

                                </Typography>
                                }
                                {!show && <Typography
                                    marginLeft={4} pb={4}
                                    gutterBottom
                                >
                                    {product.price + ' SEK'}
                                </Typography>
                                }
                               </>
                            </Grid>
                        )
                    })}
                </Grid>
            </>
        </Container>
    )
}

export default ProductCard
