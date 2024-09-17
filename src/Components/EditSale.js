import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditSale = ({ data, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreCliente: data?.nombreCliente || "",
      producto: data?.producto || "",
      precio: data?.precioVenta || "",
      cantidad: data?.cantidad || "",
      fecha: data?.fecha || "",
    },
  });

  // Handle form submission
  const onSubmit = (formData) => {
    console.log("Updated Data:", formData); // Replace with your update logic
    handleClose(); // Close modal after submission
  };

  // Reset form values when modal opens
  useEffect(() => {
    reset(data);
  }, [data, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        error={!!errors.nombre}
        style={{ width: "100%", marginTop: "5px" }}
      >
        <InputLabel id="nombre-label">Cliente</InputLabel>
        <Select
          labelId="nombre-label"
          id="nombreCliente"
          label="Cliente"
          value={data?.nombreCliente || ""}
          {...register("cliente", {
            required: "Nombre del cliente is required",
          })}
        >
          <MenuItem value="" disabled>
            Nombre del cliente
          </MenuItem>
          <MenuItem value="cliente 1">cliente 1</MenuItem>
          <MenuItem value="cliente 2">cliente 2</MenuItem>
        </Select>
        <FormHelperText>
          {errors.cliente ? errors.cliente.message : ""}
        </FormHelperText>
      </FormControl>

      <FormControl
        error={!!errors.producto}
        style={{ width: "100%", marginTop: "5px" }}
      >
        <InputLabel id="nombre-label">Producto</InputLabel>
        <Select
          labelId="nombre-label"
          id="producto"
          label="Producto"
          value={data?.producto || ""}
          {...register("producto", {
            required: "Nombre del producto is required",
          })}
        >
          <MenuItem value="" disabled>
            Nombre del producto
          </MenuItem>
          <MenuItem value="Camiseta superdry roja">
            Camiseta superdry roja
          </MenuItem>
          <MenuItem value="producto 2">producto 2</MenuItem>
        </Select>
        <FormHelperText>
          {errors.producto ? errors.producto.message : ""}
        </FormHelperText>
      </FormControl>

      <TextField
        fullWidth
        label="Precio venta"
        {...register("precioVenta", { required: "precio is required" })}
        error={!!errors.precio}
        helperText={errors.precio?.message}
        margin="dense"
      />
      <TextField
        fullWidth
        label="cantidad"
        {...register("cantidad", { required: "cantidad is required" })}
        error={!!errors.cantidad}
        helperText={errors.cantidad?.message}
        margin="dense"
      />
      <TextField
        fullWidth
        label="fecha"
        {...register("fecha", { required: "fecha is required" })}
        error={!!errors.fecha}
        helperText={errors.fecha?.message}
        margin="dense"
      />

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Guardar
      </Button>
    </form>
  );
};

export default EditSale;
