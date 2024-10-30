"use client";
import React, { useEffect, useState } from "react";
import { getUserById, UserWithProp } from "@/firebase/firebase.action";
import { toast } from "react-toastify";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { isValidImage, profileValidation } from "@/app/validations/profile";
import { updateUser } from "@/firebase/firebase.action";
import AddPhotoIcon from "@mui/icons-material/AddAPhoto";
import { convertImageFileToBase64 } from "@/app/utils/image/image";

interface Prop {
  id: string;
}

const Edit: React.FC<Prop> = ({ id }) => {
  const [user, setUser] = useState<UserWithProp | null>(null);
  const [hover, setHover] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    getUserById(id)
      .then((res) => {
        if (res) {
          setUser(res as UserWithProp);
        } else toast.error("User not found!");
      })
      .catch(() => toast.error("User not found!"));
  }, [id]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file: File | undefined = event.target.files?.[0];
    if (file) {
      const isValid: boolean = isValidImage(file.type);
      if (isValid) {
        const profileImageBase64 = (await convertImageFileToBase64(
          file
        )) as string;
        setProfileImage(profileImageBase64);
      } else {
        toast.error("Only jpeg, png, jpg images are allowed.");
      }
    } else {
      toast.error("Please upload an image");
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      my={2}
    >
      <Box sx={{ width: "60%" }}>
        <Box
          sx={{
            height: "90px",
            background: "linear-gradient(to right, #1c0252, #a52a68)",
            borderRadius: "5px 5px 0 0",
          }}
        >
          <Box display={"flex"} ml={7}>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <>
                  <Box
                    sx={{
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                      cursor: "pointer",
                      height: "80px",
                      width: "80px",
                      mt: 3,
                    }}
                    onChange={handleImageUpload}
                  >
                    <input
                      accept="image/*"
                      type="file"
                      style={{
                        position: "absolute",
                        opacity: 0,
                        cursor: "pointer",
                      }}
                    />
                    <AddPhotoIcon
                      sx={{ color: "#fff", fontSize: 40, cursor: "pointer" }}
                    />
                  </Box>
                </>
              ) : (
                <>
                  <Avatar
                    src={profileImage ? profileImage : user?.photo}
                    alt={user?.name}
                    sx={{ width: "80px", height: "80px", mt: 3 }}
                  />
                </>
              )}
            </div>
            <Typography variant="h6" sx={{ mt: 6, color: "white", ml: 2 }}>
              Hii, {user?.name || "Guest"}
            </Typography>
          </Box>
        </Box>

        <Formik
          enableReinitialize={true}
          initialValues={{
            name: user?.name || "",
            email: user?.email || "",
          }}
          validationSchema={profileValidation}
          onSubmit={async (values, { setSubmitting }) => {
            const resp = await updateUser(id, {
              name: values.name,
              email: values.email,
              photo: profileImage ? profileImage : user?.photo,
            });
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            if (resp) {
              setUser({
                ...user,
                name: values.name,
                photo: profileImage ? profileImage : user?.photo,
              } as UserWithProp);
              toast.success("Data saved!");
            } else {
              toast.error("Something went wrong");
            }
            setSubmitting(false);
          }}
        >
          {({ values, handleBlur, handleChange, isSubmitting }) => {
            return (
              <Form>
                <Box mt={4}>
                  <Grid container spacing={3}>
                    <Grid item sm={12}>
                      <Typography variant="body1" ml={15}>
                        Account Details
                      </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          width: "100%",
                        }}
                      >
                        <Typography variant="body2">Email Address</Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={9}>
                      <Field
                        disabled
                        name="email"
                        type="email"
                        component={TextField}
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item sm={3}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          width: "100%",
                        }}
                      >
                        <Typography variant="body2">User Name</Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={9}>
                      <Field
                        name="name"
                        type="text"
                        component={TextField}
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  width={"100%"}
                >
                  <Button
                    startIcon={
                      isSubmitting ? <CircularProgress size={10} /> : null
                    }
                    type="submit"
                    variant="outlined"
                    color="error"
                    disabled={isSubmitting}
                  >
                    Save
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};

export default Edit;
