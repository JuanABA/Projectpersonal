import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditClient = ({ data, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: data?.nombre || "",
      telefono: data?.telefono || "",
      direccion: data?.direccion || "",
      correo: data?.correo || "",
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
      <TextField
        fullWidth
        label="Nombre"
        {...register("nombre", { required: "Nombre is required" })}
        error={!!errors.nombre}
        helperText={errors.nombre?.message}
        margin="dense"
      />
      <TextField
        fullWidth
        label="Teléfono"
        {...register("telefono", { required: "Teléfono is required" })}
        error={!!errors.telefono}
        helperText={errors.telefono?.message}
        margin="dense"
      />
      <TextField
        fullWidth
        label="Dirección"
        {...register("direccion", { required: "Dirección is required" })}
        error={!!errors.direccion}
        helperText={errors.direccion?.message}
        margin="dense"
      />
      <TextField
        fullWidth
        label="Correo"
        {...register("correo", { required: "Correo is required" })}
        error={!!errors.correo}
        helperText={errors.correo?.message}
        margin="dense"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Guardar
      </Button>
    </form>
  );
};

export default EditClient;
