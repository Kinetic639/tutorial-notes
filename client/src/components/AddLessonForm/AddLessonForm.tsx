import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import {Button, Grid} from '@mui/material';

const validationSchema = yup.object({
    tags: yup
        .string().default('Enter your email').defined()
        .email('Enter a valid email')
        .required('Email is required'),
    link: yup
        .string().default('Enter your email').defined()
        .email('Enter a valid email')
        .required('Email is required'),
    email: yup
        .string().default('Enter your email').defined()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string().default('Enter your password').defined()
        .required('Password is required'),
});

export const AddLessonForm = () => {
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
            link: '',
            tags: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="tags"
                            name="tags"
                            label="tags"
                            size='small'
                            value={formik.values.tags}
                            onChange={formik.handleChange}
                            error={formik.touched.tags && Boolean(formik.errors.tags)}
                            helperText={formik.touched.tags && formik.errors.tags}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="link"
                            name="link"
                            label="link"
                            size='small'
                            value={formik.values.link}
                            onChange={formik.handleChange}
                            error={formik.touched.link && Boolean(formik.errors.link)}
                            helperText={formik.touched.link && formik.errors.link}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            size='small'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="text"
                            size='small'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button sx={{maxWidth: '500px', margin: '0 auto'}} color="primary" variant="contained" fullWidth
                                type="submit">
                            Add Lesson
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

