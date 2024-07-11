import React, { useEffect, useState } from 'react'
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material'

const WomensClothing = () => {
    const [data, setData] = useState([])

    //fetch data using useEffect hook
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
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
                                        maxWidth: 440,
                                        boxShadow: 1,
                                        borderRadius: 2,
                                        m: 2
                                    }}
                                >
                                    <CardMedia
                                        sx={{ height: 250 }}
                                        image={product.image}
                                        title="green iguana"
                                    />
                                </Card>
                                <Typography
                                  marginLeft={4} pb={1}

                                >
                                    {product.title}
                                </Typography>
                                <Typography
                                    marginLeft={4} pb={3}

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
