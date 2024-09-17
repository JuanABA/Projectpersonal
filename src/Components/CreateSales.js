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

const CreateSales = () => {
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
          alignItems: "left",
        }}
      >
        <Typography component="h1" variant="h5">
          Registrar venta
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* Nombre del cliente */}
            <Grid item xs={12} sm={6}>
              <FormControl error={!!errors.nombre} style={{ width: "100%" }}>
                <InputLabel id="nombre-label">Cliente</InputLabel>
                <Select
                  labelId="nombre-label"
                  id="nombreCliente"
                  label="Cliente"
                  {...register("nombre", {
                    required: "Nombre del cliente is required",
                  })}
                  style={{ textAlign: "left" }}
                >
                  <MenuItem value="" disabled>
                    Nombre del cliente
                  </MenuItem>
                  <MenuItem value="Cliente 1">Cliente 1</MenuItem>
                  <MenuItem value="Cliente 2">Cliente 2</MenuItem>
                </Select>
                <FormHelperText>
                  {errors.nombre ? errors.nombre.message : ""}
                </FormHelperText>
              </FormControl>
            </Grid>

            {/* Producto */}
            <Grid item xs={12} sm={6}>
              <FormControl error={!!errors.producto} style={{ width: "100%" }}>
                <InputLabel id="nombre-label">Producto</InputLabel>
                <Select
                  labelId="nombre-label"
                  id="producto"
                  label="Producto"
                  {...register("producto", {
                    required: "Nombre del producto is required",
                  })}
                  style={{ textAlign: "left" }}
                >
                  <MenuItem value="" disabled>
                    Nombre del producto
                  </MenuItem>
                  <MenuItem value="camiseta superdry roja">
                    camiseta superdry roja
                  </MenuItem>
                  <MenuItem value="producto 2">Producto 2</MenuItem>
                </Select>
                <FormHelperText>
                  {errors.producto ? errors.producto.message : ""}
                </FormHelperText>
              </FormControl>
            </Grid>

            {/* Precio */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="precio"
                label="Precio"
                {...register("precio", { required: "Precio is required" })}
                error={!!errors.precio}
                helperText={errors.precio ? errors.precio.message : ""}
              />
            </Grid>

            {/* Cantidad */}
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                id="cantidad"
                label="Cantidad"
                {...register("cantidad", { required: "Cantidad is required" })}
                error={!!errors.cantidad}
                helperText={errors.cantidad ? errors.cantidad.message : ""}
              />
            </Grid>

            {/* fecha */}
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                id="fecha"
                label="Fecha"
                {...register("fecha", { required: "Fecha is required" })}
                error={!!errors.fecha}
                helperText={errors.fecha ? errors.fecha.message : ""}
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

export default CreateSales;
