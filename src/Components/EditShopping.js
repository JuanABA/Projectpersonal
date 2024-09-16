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

const EditShopping = ({ data, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreProveedor: data?.nombreProveedor || "",
      producto: data?.producto || "",
      precio: data?.precio || "",
      talla: data?.talla || "",
      cantidad: data?.cantidad || "",
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
        <InputLabel id="nombre-label">Proveedor</InputLabel>
        <Select
          labelId="nombre-label"
          id="nombreProveedor"
          label="Proveedor"
          value={data?.nombreProveedor || ""}
          {...register("nombre", {
            required: "Nombre del proveedor is required",
          })}
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
      <TextField
        fullWidth
        label="Producto"
        {...register("producto", { required: "Producto is required" })}
        error={!!errors.producto}
        helperText={errors.producto?.message}
        margin="dense"
      />
      <TextField
        fullWidth
        label="Precio compra"
        {...register("precioCompra", { required: "precio is required" })}
        error={!!errors.precio}
        helperText={errors.precio?.message}
        margin="dense"
      />
      <TextField
        fullWidth
        label="talla"
        {...register("talla", { required: "talla is required" })}
        error={!!errors.talla}
        helperText={errors.talla?.message}
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
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Guardar
      </Button>
    </form>
  );
};

export default EditShopping;
