import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        variant='outlined'
        color='neutral'
        onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}>
          <Typography
            component='label'
            htmlFor='close-icon'
            fontSize='sm'
            fontWeight='lg'
            sx={{ cursor: "pointer" }}>
            Close
          </Typography>
          <ModalClose id='close-icon' sx={{ position: "initial" }} />
        </Box>

        <List
          size='lg'
          component='nav'
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}>
          <ListItemButton
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
            sx={{ fontWeight: "lg" }}>
            Projects
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              navigate("/about");
              setOpen(false);
            }}>
            About
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              navigate("/hire");
              setOpen(false);
            }}>
            Hire Me
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}>
            Contact
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
