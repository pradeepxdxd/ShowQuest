

"use client";
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField as MuiTextField,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/app/store";
import {
  addShowData,
  clearShow,
  getShowByIdData,
  updateShowData,
} from "@/app/store/show/show.slice";
import { genres } from "@/app/data/recommanded-movies/data";
import { movieValidationSchema } from "@/app/validations/movie";
import PreviewImage from "@/app/components/image/PreviewImage";
import { convertImageFileToBase64 } from "@/app/utils/image/image";

export default function AddMovieView() {
  const { id } = useParams<{ id: string | string[] }>();
  const { show } = useSelector((state: RootState) => state.show);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (Array.isArray(id) && id[1]) {
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
          Add{" "}
          {id && Array.isArray(id) && id.length > 0
            ? id[0] === "movie"
              ? "Movie"
              : id[0] === "live-event"
              ? "Live Event"
              : "Premiere"
            : "Premiere"}
        </Typography>
        <Formik
          enableReinitialize
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

            if (Array.isArray(id) && id[1]) {
              dispatch(
                updateShowData({
                  id: id[1],
                  data: {
                    title: values.title,
                    rating: values.rating,
                    type: values.type,
                    genre: values.genre,
                    votes: values.votes,
                    image: poster,
                  },
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
                })
              );
            }

            action.setFieldValue("image", null);
            action.resetForm();

            if (Array.isArray(id)) {
              if (id[0] === "movie") router.push("/pages/movies");
              else if (id[0] === "live-event") router.push("/pages/events");
              else router.push("/pages/premiere");
            }
          }}
        >
          {({ values, setFieldValue, touched, errors }) => (
            <Form>
              <Grid container spacing={3}>
                {/* Fields for title, rating, votes */}
                <Grid item xs={12}>
                  <Field
                    name="title"
                    component={TextField}
                    label="Title"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <Field
                    name="rating"
                    component={TextField}
                    type="number"
                    label="Rating"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <Field
                    name="votes"
                    component={TextField}
                    type="number"
                    label="Votes"
                    fullWidth
                  />
                </Grid>

                {/* Autocomplete for genre */}
                <Grid item sm={6}>
                  <Autocomplete
                    multiple
                    options={genres}
                    value={values.genre}
                    onChange={(_, newValue) => setFieldValue("genre", newValue)}
                    renderInput={(params) => (
                      <MuiTextField
                        {...params}
                        label="Genre"
                        error={Boolean(touched.genre && errors.genre)}
                        helperText={touched.genre && errors.genre}
                      />
                    )}
                  />
                </Grid>

                {/* Autocomplete for type */}
                <Grid item sm={6}>
                  <Autocomplete
                    options={["movie", "live-event", "premiere"]}
                    value={values.type}
                    onChange={(_, newValue) => setFieldValue("type", newValue)}
                    renderInput={(params) => (
                      <MuiTextField
                        {...params}
                        label="Type"
                        error={Boolean(touched.type && errors.type)}
                        helperText={touched.type && errors.type}
                      />
                    )}
                  />
                </Grid>

                {/* Image preview and upload */}
                <Grid item xs={12}>
                  {values.image &&
                    (typeof values.image === "string" ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={values.image}
                        alt="Preview"
                        style={{ width: "300px", height: "400px" }}
                      />
                    ) : (
                      <PreviewImage file={values.image} />
                    ))}
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setFieldValue("image", file);
                    }}
                  />
                  {touched.image && errors.image && (
                    <Typography color="error" variant="caption">
                      {errors.image}
                    </Typography>
                  )}
                </Grid>

                {/* Submit and Cancel buttons */}
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
