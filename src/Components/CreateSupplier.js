import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material"; // Use Grid2 instead of Grid

const CreateSupplier = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Registrar Proveedor
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {" "}
            {/* Use Grid2 here */}
            <Grid item xs={24} sm={6}>
              {" "}
              {/* Use Grid2 here */}
              <TextField
                fullWidth
                id="nombre"
                label="Nombre"
                {...register("nombre", { required: "Nombre is required" })}
                error={!!errors.nombre}
                helperText={errors.nombre ? errors.nombre.message : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="telefono"
                label="Teléfono"
                {...register("telefono", { required: "Teléfono is required" })}
                error={!!errors.telefono}
                helperText={errors.telefono ? errors.telefono.message : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="direccion"
                label="Dirección"
                {...register("direccion", {
                  required: "Dirección is required",
                })}
                error={!!errors.direccion}
                helperText={errors.direccion ? errors.direccion.message : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="correo"
                label="correo"
                {...register("correo", {
                  required: "Correo is required",
                })}
                error={!!errors.correo}
                helperText={errors.correo ? errors.correo.message : ""}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateSupplier;
