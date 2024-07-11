import React, { useEffect, useState } from 'react'
import {
    Container,
    Grid,
    Card,
    CardMedia,
    Typography
} from '@mui/material'

const MensClothing = () => {
    const [data, setData] = useState([])

    //fetch data using useEffect hook
    useEffect(() => {
        const mensClothingsApi = "https://fakestoreapi.com/products/category/men's%20clothing";
        fetch(mensClothingsApi)
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
                                    sx={{
                                        maxWidth: 345,
                                        boxShadow: 1,
                                        borderRadius: 2,
                                        m: 2
                                    }}
                                >
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={product.image}
                                        title="green iguana"
                                    />
                                </Card>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {product.title}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
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

export default MensClothing
