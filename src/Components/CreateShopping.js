import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material"; // Use Grid2 instead of Grid

const CreateShopping = () => {
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
          Registrar compra
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* Nombre del proveedor */}
            <Grid item xs={12} sm={5}>
              <FormControl error={!!errors.nombre} style={{ width: "100%" }}>
                <InputLabel id="nombre-label">Proveedor</InputLabel>
                <Select
                  labelId="nombre-label"
                  id="nombreProveedor"
                  label="Proveedor"
                  defaultValue="" // Valor por defecto vacío
                  {...register("nombre", {
                    required: "Nombre del proveedor is required",
                  })}
                  style={{ textAlign: "left" }}
                >
                  <MenuItem value="" disabled>
                    Nombre del proveedor
                  </MenuItem>
                  <MenuItem value="Proveedor 1">Proveedor 1</MenuItem>
                  <MenuItem value="Proveedor 2">Proveedor 2</MenuItem>
                </Select>
                <FormHelperText>
                  {errors.nombre ? errors.nombre.message : ""}
                </FormHelperText>
              </FormControl>
            </Grid>

            {/* Producto */}
            <Grid item xs={12} sm={7}>
              <TextField
                fullWidth
                id="producto"
                label="Producto"
                {...register("producto", { required: "Producto is required" })}
                error={!!errors.producto}
                helperText={errors.producto ? errors.producto.message : ""}
              />
            </Grid>

            {/* Precio */}
            <Grid item xs={12} sm={7}>
              <TextField
                fullWidth
                id="precio"
                label="Precio"
                {...register("precio", { required: "Precio is required" })}
                error={!!errors.precio}
                helperText={errors.precio ? errors.precio.message : ""}
              />
            </Grid>

            {/* Talla */}
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                id="talla"
                label="Talla"
                {...register("talla", { required: "Talla is required" })}
                error={!!errors.talla}
                helperText={errors.talla ? errors.talla.message : ""}
              />
            </Grid>

            {/* Cantidad */}
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                id="Cantidad"
                label="Cantidad"
                {...register("cantidad", { required: "Cantidad is required" })}
                error={!!errors.cantidad}
                helperText={errors.cantidad ? errors.cantidad.message : ""}
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

export default CreateShopping;
