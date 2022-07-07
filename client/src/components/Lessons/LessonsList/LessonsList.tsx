import React from "react";
import {Card, CardMedia, Grid, IconButton} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const LessonsList = () => {
    return <Grid container spacing={4}>
        {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                    sx={{height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}
                >
                    <CardMedia
                        component="img"
                        image="https://picsum.photos/1280/720"
                        alt="random"
                    />
                    <CardContent sx={{flexGrow: 1}}>
                        <Typography gutterBottom variant="caption">
                            #javasript #programming #ts #webdev
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Heading
                        </Typography>
                        <Typography gutterBottom variant="subtitle2">
                            Author
                        </Typography>
                        <Typography>
                            This is a media card. You can use this section to describe the
                            content.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton color='primary'>
                            <StarBorderIcon/>
                        </IconButton>
                        <Box sx={{flexGrow: 1}}/>
                        <Button size="small">View</Button>
                        <Button size="small">Edit</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))}
    </Grid>
}
