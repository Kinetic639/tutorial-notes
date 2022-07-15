import React from "react";
import ReactPlayer from 'react-player'

import './Lesson.scss'
import Typography from "@mui/material/Typography";
import {TextEditor} from "../../TextEditor/TextEditor";
import {NotesList} from "../../Notes/NotesList/NotesList";
import {Button, Grid} from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";

const sampleLesson = {
    url: '',
    tags: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque dolore doloremque illum labore, numquam quos reiciendis voluptatum.',
    notes: []
}

export const Lesson = () => {
    return (
        <div>
            {/*<Grid item xs={12} sx={{marginBottom: '15px'}}>*/}
            {/*    <Typography variant="caption">*/}
            {/*        #javasript #programming #ts #webdev*/}
            {/*    </Typography>*/}
            {/*</Grid>*/}

            <Grid container spacing={1} sx={{marginBottom: '20px'}}>

                <Grid item xs={12}>
                    <Typography sx={{typography: {sm: 'h3', xs: 'h4'}}}>
                        Tutorial Title
                    </Typography>
                    <Typography gutterBottom sx={{typography: {sm: 'h5', xs: 'h6'}, paddingLeft: '10px'}}>
                        Author
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{typography: {sm: 'subtitle1', xs: 'subtitle2'}}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur, eveniet iste
                        placeat
                        quasi quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur, eveniet
                        iste placeat
                        quasi quos.
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography sx={{marginBottom: '0'}} component='div' gutterBottom
                                variant="caption">
                        Created: 12-12-2022 13:45
                    </Typography>
                    <Box sx={{flexGrow: '1'}}/>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </Grid>
            </Grid>
            <div className="player-wrapper">
                <ReactPlayer className='react-player' height={'100%'} width={'100%'} controls
                             url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>

            </div>
            <Button startIcon={<AddCircleIcon/>} variant='contained'
                    sx={{width: '100%', margin: '10px 0 30px', padding: '10px 0'}}>Add
                Note</Button>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography gutterBottom sx={{typography: {sm: 'h4', xs: 'h5'}, paddingLeft: '10px'}}>
                        Notes:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <NotesList/>
                </Grid>
            </Grid>

        </div>
    )
}
