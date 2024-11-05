/* eslint-disable @next/next/no-img-element */
"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { genres } from "@/app/data/recommanded-movies/data";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField as MuiTextFeild } from "@mui/material";
import { movieValidationSchema } from "@/app/validations/movie";
import PreviewImage from "@/app/components/image/PreviewImage";
import { convertImageFileToBase64 } from "@/app/utils/image/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addShowData,
  clearShow,
  getShowByIdData,
  updateShowData,
} from "@/app/store/show/show.slice";
import { AppDispatch, RootState } from "@/app/store";
import { useParams, useRouter } from "next/navigation";
import { Show } from "@/firebase/actions/action.types";

export default function AddMovieView() {
  const { id } = useParams<{ id: string }>();
  const { show } = useSelector((state: RootState) => state.show);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (id[1] && id[1] != undefined) {
      dispatch(getShowByIdData(id[1]));
    }
    return () => {
      dispatch(clearShow());
    };
  }, [dispatch, id]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
      m={4}
    >
      <Container maxWidth="sm">
        <Typography variant="h6" textAlign="center" my={2}>
          Add Movie
        </Typography>
        <Formik
          enableReinitialize={true}
          initialValues={{
            title: show?.title || "",
            rating: show?.rating || 0,
            votes: show?.votes || 0,
            genre: show?.genre || [],
            type: show?.type || "",
            image: show?.image || null,
          }}
          validationSchema={movieValidationSchema}
          onSubmit={async (values, action) => {
            let poster: null | string = null;

            if (id) {
              poster = show?.image === undefined ? null : show?.image;
              if (typeof values.image !== "string" && values.image)
                poster = await convertImageFileToBase64(
                  values.image as unknown as File
                );
            } else {
              if (values.image) {
                poster = await convertImageFileToBase64(
                  values.image as unknown as File
                );
              }
            }
            if (id[1] && id[1] != undefined) {
              dispatch(
                updateShowData({
                  id: show?.id as string,
                  data: {
                    title: values.title,
                    rating: values.rating,
                    type: values.type,
                    genre: values.genre,
                    votes: values.votes,
                    image: poster,
                  } as Show,
                })
              );
            } else {
              dispatch(
                addShowData({
                  title: values.title,
                  rating: values.rating,
                  type: values.type,
                  genre: values.genre,
                  votes: values.votes,
                  image: poster,
                } as Show)
              );
            }
            action.setFieldValue("image", null);
            action.resetForm();
            if (id[0] === "movie") router.push("/pages/movies");
            if (id[0] === "live-event") router.push("/pages/events");
            if (id[0] === "premiere") router.push("/pages/premiere");
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            setFieldValue,
            errors,
            touched,
          }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    component={TextField}
                    label="title"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <Field
                    name="rating"
                    type="number"
                    value={values.rating}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    component={TextField}
                    label="rating"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <Field
                    name="votes"
                    type="number"
                    value={values.votes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    component={TextField}
                    label="votes"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <Autocomplete
                    multiple
                    options={genres}
                    value={values.genre}
                    onChange={(_, newValue) => {
                      setFieldValue("genre", newValue);
                    }}
                    onBlur={handleBlur} // Handle blur manually if needed
                    renderInput={(params) => {
                      return (
                        <MuiTextFeild
                          {...params}
                          name="genre"
                          id="genre"
                          label="genre"
                          value={values.genre}
                          onBlur={handleBlur}
                          error={Boolean(touched.genre && errors.genre)}
                          helperText={touched.genre && errors.genre}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid item sm={6}>
                  <Autocomplete
                    options={["movie", "live-event", "premiere"]}
                    value={values.type} // the part of state what holds the user input
                    onChange={(_, value) => setFieldValue("type", value || {})}
                    onBlur={handleBlur} // so formik can see the forms touched state
                    renderInput={(params) => (
                      <MuiTextFeild
                        {...params}
                        name="type"
                        label="type"
                        id="type"
                        value={values.type}
                        onBlur={handleBlur}
                        error={Boolean(touched.type && errors.type)}
                        helperText={touched.type && errors.type}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  {values.image &&
                    (typeof values.image === "string" ? (
                      <>
                        <img
                          src={values.image}
                          alt="preview image"
                          style={{ width: "300px", height: "400px" }}
                        />
                      </>
                    ) : (
                      <PreviewImage file={values.image} />
                    ))}
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setFieldValue("image", file);
                    }}
                  />
                  {(touched.image || errors.image) && (
                    <Typography
                      component={"div"}
                      variant="caption"
                      color="error"
                    >
                      {errors.image}
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" justifyContent="space-between">
                    <Button type="reset" variant="outlined" color="info">
                      Cancel
                    </Button>
                    <Button type="submit" variant="outlined" color="error">
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
