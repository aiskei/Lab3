import React, { useEffect, useState } from 'react'
import {
    Container,
    Grid,
    Card,
    CardMedia,
    Typography
} from '@mui/material'

const WomensClothing = () => {
    const [data, setData] = useState([])

    //fetch data using useEffect hook
    useEffect(() => {
        const womensClothingsApi = "https://fakestoreapi.com/products/category/women's%20clothing";
        fetch(womensClothingsApi)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data)
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
                                    height="350"
                                    image={product.image}
                                    alt={"alt"}
                                    sx={{ margin: "1em 1em 0 1em", objectFit: "contain" }}
                                    title="green iguana"
                                />
                            </Card>
                            <Typography
                                marginLeft={4} pt={2}
                            >
                                {product.title}
                            </Typography>
                            <Typography
                                marginLeft={4} pb={4}
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

export default WomensClothing
