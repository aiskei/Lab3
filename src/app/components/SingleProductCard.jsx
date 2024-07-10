import React from 'react'
import { useEffect, useState } from 'react'
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material'

const SingleProductCard = () => {
    const [data, setData] = useState([])

    //fetch data using useEffect hook
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data)
                console.log(data.title)
            })
    }, [])

    return (
        <Container>
            <>
                {' '}
                <Grid container m={3}>
                    <Grid key={data.title} item xs={12} md={6} lg={4}>
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
                                image={data.image}
                                title="green iguana"
                            />
                        </Card>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.price + ' kr.'}
                        </Typography>
                    </Grid>
                </Grid>
            </>
        </Container>
    )
}

export default SingleProductCard
