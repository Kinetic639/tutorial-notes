import React from "react";
import {Avatar, Card, CardHeader, CardMedia, Grid, IconButton} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {red} from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const Note = () => {
    return (

        <Grid item xs={12}>

            <Card
                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
            >
                <CardHeader sx={{paddingBottom: '0'}}
                            avatar={
                                <IconButton size='large' sx={{
                                    padding: '0',
                                    width: {xs: '40px', sm: '50px'},
                                    height: {xs: '40px', sm: '50px'}
                                }} aria-label="play"
                                            color="primary">
                                    <PlayCircleIcon sx={{width: '100%', height: '100%'}}/>
                                </IconButton>
                            }
                            titleTypographyProps={{variant: 'h6'}}
                            title="Heading"
                            subheader="time:"
                            action={
                                <Typography component='div' sx={{display: 'flex', justifyContent: 'flex-end'}}
                                            
                                            variant="caption">12-12-2022 13:45
                                </Typography>
                            }
                />
                <CardContent sx={{flexGrow: 1}}>
                    <Typography variant='subtitle1'>
                        This is a media card. You can use this section to describe the
                        content.
                    </Typography>
                </CardContent>
                <CardActions>

                    <Box sx={{flexGrow: 1}}/>
                    <Button size="small">Edit</Button>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
