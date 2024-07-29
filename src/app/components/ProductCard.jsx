import React, { useEffect, useState } from 'react'
import ProductInfo from './ProductInfo';
import {
    Container,
    Grid,
    Card,
    CardMedia,
    Typography
} from '@mui/material'

const ProductCard = () => {
    const [data, setData] = useState([]);
    const [showProductDetails, setProductDetails] = useState(false);
    const [show, setShow] = useState(false);

    //fetch data using useEffect hook
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data)
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
                    {data.map(function (product, item) {
                        return (
                            <Grid
                                key={item}
                                item={true}
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <Card id="data-test-id" onClick={() => handleClick()}
                                raised
                                    sx={{
                                        maxWidth: 355,
                                        margin: "0 auto",
                                        padding: "0.1em",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={product.image}
                                        alt={"alt"}
                                        sx={{ margin: "1em 1em 0 1em", objectFit: "contain" }}
                                        title="green iguana"
                                    />
                                </Card>
                                 <Card
                                 raised
                                    sx={{
                                        maxWidth: 355,
                                        margin: "0 auto",
                                        padding: "0.1em",
                                    }}>
                                        { showProductDetails &&
                                        <ProductInfo
                                            product={product}
                                        />
                                        }
                                 </Card>

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
