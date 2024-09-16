import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Button, DialogContentText, IconButton } from "@mui/material";
import { DeleteIcon, EditIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import EditShopping from "./EditShopping";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(nombreProveedor, producto, precioCompra, talla, cantidad) {
  return { nombreProveedor, producto, precioCompra, talla, cantidad };
}

const rows = [
  createData("Proveedor 1", "Camiseta superdry roja", "50.000", "XL", "1"),
];

export default function Shopping() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false); // For opening and closing modal
  const [editData, setEditData] = useState(null); // Store the current row data for editing
  const [openDelete, setOpenDelete] = useState(false);
  // const [rowToDelete, setRowToDelete] = useState(-1);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Open modal and set row data
  const handleEditClick = (row) => {
    setEditData(row); // Set data for the row to edit
    setOpen(true); // Open the modal
  };

  // Close modal
  const handleClose = () => {
    setOpen(false);
    setEditData(null);
  };

  return (
    <div style={{ paddingTop: "5%", paddingLeft: "13%", paddingRight: "13%" }}>
      <h2>Tabla de Compras</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre de proveedor</StyledTableCell>
              <StyledTableCell>Producto</StyledTableCell>
              <StyledTableCell>Precio por compra</StyledTableCell>
              <StyledTableCell>Talla</StyledTableCell>
              <StyledTableCell>Cantidad</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <StyledTableRow key={row.nombreProveedor}>
                <StyledTableCell component="th" scope="row">
                  {row.nombreProveedor}
                </StyledTableCell>
                <StyledTableCell>{row.producto}</StyledTableCell>
                <StyledTableCell>{row.precioCompra}</StyledTableCell>
                <StyledTableCell>{row.talla}</StyledTableCell>
                <StyledTableCell>{row.cantidad}</StyledTableCell>
                <StyledTableCell style={{ width: "200px" }}>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditClick(row)}
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    aria-label="delete"
                    style={{ marginLeft: "80px" }}
                  >
                    <DeleteIcon
                      onClick={() => {
                        setOpenDelete(true);
                        // setRowToDelete(params.row.id);
                      }}
                    />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      {/* Delete Supplier */}
      <Dialog
        open={openDelete}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ¿Estas seguro de eliminar esta compra?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)}>No</Button>
          <Button
            onClick={() => {
              // const response = await DeleteUser(rowToDelete);
              // if (response.message) {
              //   setOpen(false);
              //   getUsers();
              // }
              setOpenDelete(false);
            }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar compra</DialogTitle>
        <DialogContent>
          <EditShopping data={editData} handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        className="button"
        variant="outlined"
        style={{ marginTop: "30px", marginLeft: "1200px" }}
        onClick={() => {
          navigate("/createshopping");
        }}
      >
        Register
      </Button>
    </div>
  );
}
