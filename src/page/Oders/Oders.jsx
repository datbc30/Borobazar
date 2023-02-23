import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { tableCellClasses } from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const options = [
  "Order Details",
  "Cancel Order",
];

const ITEM_HEIGHT = 48;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData(8631, "2 years ago", "Delivered", "25 May, 2021", "$867.00"),
  createData(8632, "2 years ago", "On the way", "18 Mar, 2021","$440.00"),
  createData(6504, "2 years ago	", "Order placed", "18 Aug, 2021", "$555.00"),
  createData(8487, "2 years ago	", "Delivered", "12 Feb, 2020", "$486.00"),
  createData(3045, "2 years ago	", "On the way", "16 Jun, 2020","$588.00"),
];

export default function Oders() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="page-oders">
      <div className="oders">
        <div className="oder-top">
          <div className="oder-top-group">
            <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
              My order list
            </h2>
            <div className="inputSearch">
              <input
                type="text"
                id="search"
                value=""
                placeholder="Search Order List"
              />
              <a href="/">
                <i class="fas fa-search" style={{ color: "#757575" }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="oder-body">
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: 0,
            }}
          >
            <Table
              aria-label="simple table"
              sx={{
                boxShadow: 0,
                minWidth: 650,
              }}
            >
              <TableHead
                sx={{
                  backgroundColor: "#f3f6f9",
                }}
              >
                <TableRow>
                  <TableCell>Order Number</TableCell>
                  <TableCell align="right">Order Date</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Delivery Time</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { borderBottom: 0 }}}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 2.5,
                            width: "auto",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="oder-footer">
          <Pagination count={2} variant="outlined" shape="rounded" />
        </div>
      </div>
    </div>
  );
}
