import React, {SyntheticEvent, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button, Grid} from '@mui/material';
import {LessonCard} from "../LessonCard/LessonCard";
import {LessonEntity} from "types";
import {useAppDispatch} from "../../redux/app/hooks";
import {addLessonAsync} from "../../redux/features/lessons-slice";


export const AddLessonForm = () => {
    const dispatch = useAppDispatch()

    const [form, setForm] = useState({
        link: '',
        author: "",
        description: "",
        thumbnail: "",
        title: "",
        videoId: "",
        createdAt: (new Date()).toLocaleString(),
        isImportant: 0,
        userId: 'aaaa'
    })

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    const updateLessonCard = async (value: any) => {

        const YouTubeGetID = (url: any) => {
            url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
        };


        const videoId = YouTubeGetID(value)

        const videoRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyDa_pBxp3YXhmex0-Bx5QWzvaAvQ-AIgLg`)
        const videoData = await videoRes.json()

        await updateForm('link', value)
        await updateForm('videoId', videoId)
        await updateForm('title', videoData.items[0].snippet.title)
        await updateForm('author', videoData.items[0].snippet.channelTitle)
        await updateForm('description', videoData.items[0].snippet.description)
        await updateForm('thumbnail', videoData.items[0].snippet.thumbnails.high.url)
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(addLessonAsync(form))
    }
    return (
        <Grid container spacing={2} sx={{justifyContent: 'center'}}>
            <Grid item xs={12} md={6} lg={8} xl={7}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}
                          sx={{maxWidth: '600px', margin: {xs: '0 auto', md: '0'}, paddingRight: '30px'}}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="link"
                                name="link"
                                required
                                label="link"
                                inputProps={{pattern: `^.*((youtu.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?))\\??v?=?([^#&?]*).*`}}
                                size='small'
                                value={form.link}
                                onChange={e => updateLessonCard(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="title"
                                name="title"
                                label="title"
                                required
                                size='small'
                                value={form.title}
                                onChange={e => updateForm('title', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="author"
                                name="author"
                                label="author"
                                required
                                size='small'
                                value={form.author}
                                onChange={e => updateForm('author', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="description"
                                name="description"
                                label="description"
                                required
                                size='small'
                                value={form.description}
                                onChange={e => updateForm('description', e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <Button sx={{maxWidth: '600px', margin: '0 auto'}} color="primary" variant="contained"
                                    fullWidth
                                    type="submit">
                                Add Lesson
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

