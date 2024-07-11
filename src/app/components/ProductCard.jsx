import React, { useEffect, useState } from 'react'
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material'

const ProductCard = () => {
    const [data, setData] = useState([])

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
        <Container>
            <>
                <Grid container m={3}>
                    {data.map(function (product) {
                        return (
                            <Grid
                                key={product.title}
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
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={product.image}
                                        alt={"alt"}
                                        sx={{ margin: "1em 1em 0 1em", objectFit: "contain" }}
                                        title="green iguana"
                                    />
                                </Card>
                                <Typography
                                    marginLeft={4} pt={2}
                                    gutterBottom

                                >
                                    {product.title}
                                </Typography>
                                <Typography
                                    marginLeft={4} pb={4}
                                    gutterBottom
                                >
                                    {product.price + ' kr.'}
                                </Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </>
        </Container>
    )
}

export default ProductCard
