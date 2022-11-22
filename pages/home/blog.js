import * as React from "react";
import {
  Grid,
  CardActionArea,
  Button,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Card,
} from "@mui/material";
import { blogData } from "../data";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Bloger</title>
      </Head>
      <Grid container spacing={2}>
        {blogData?.map((e, i) => {
          return (
            <div className="container w-100" key={i}>
              <Grid item xs={12} md={5} sm={5} lg={6}>
                <Card sx={{ maxWidth: 345, alignItem: "center" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{ width: "100%" }}
                      image={e.img}
                      alt={e.title}
                      className="inner-img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {e.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {e.subtitle}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ p: 2, pb: 3 }}>
                    <Button size="small" variant="contained" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default Blog;
