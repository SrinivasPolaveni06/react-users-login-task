//     <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light left-card">
//     <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
//       <a
//         href="/"
//         className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
//       >
//         <span className="fs-5 d-none d-sm-inline text-dark">Menu</span>
//       </a>
//       <ul
//         className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
//         id="menu"
//       >
//         <li className="nav-item">
//           <a href="#" className="nav-link align-middle px-0">
//             <i className="fs-4 bi-house"></i>
//             <span className="ms-1 d-none d-sm-inline text-dark">
//               Home
//             </span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#submenu1"
//             data-bs-toggle="collapse"
//             className="nav-link px-0 align-middle"
//           >
//             <i className="fs-4 bi-speedometer2"></i>
//             <span className="ms-1 d-none d-sm-inline text-dark">
//               Dashboard
//             </span>
//           </a>
//           <ul
//             className="collapse show nav flex-column ms-1"
//             id="submenu1"
//             data-bs-parent="#menu"
//           >
//             <li className="w-100">
//               <a href="#" className="nav-link px-0">
//                 <span className="d-none d-sm-inline text-dark">
//                   Item
//                 </span>
//                 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-0">
//                 <span className="d-none d-sm-inline text-dark">
//                   Item
//                 </span>
//                 2
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href="#" className="nav-link px-0 align-middle">
//             <i className="fs-4 bi-table"></i>
//             <span className="ms-1 d-none d-sm-inline text-dark">
//               Orders
//             </span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#submenu2"
//             data-bs-toggle="collapse"
//             className="nav-link px-0 align-middle "
//           >
//             <i className="fs-4 bi-bootstrap"></i>
//             <span className="ms-1 d-none d-sm-inline text-dark">
//               Bootstrap
//             </span>
//           </a>
//           <ul
//             className="collapse nav flex-column ms-1"
//             id="submenu2"
//             data-bs-parent="#menu"
//           >
//             <li className="w-100">
//               <a href="#" className="nav-link px-0">
//                 <span className="d-none d-sm-inline text-dark">
//                   Item
//                 </span>{" "}
//                 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-0">
//                 <span className="d-none d-sm-inline text-dark">
//                   Item
//                 </span>{" "}
//                 2
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a
//             href="#submenu3"
//             data-bs-toggle="collapse"
//             className="nav-link px-0 align-middle"
//           >
//             <i className="fs-4 bi-grid"></i>
//             <span className="ms-1 d-none d-sm-inline text-dark">
//               Products
//             </span>
//           </a>
//           <ul
//             className="collapse nav flex-column ms-1"
//             id="submenu3"
//             data-bs-parent="#menu"
//           >
//             <li className="w-100">
//               <a href="#" className="nav-link px-0 text-dark">
//                 <span className="d-none d-sm-inline text-dark">
//                   Product
//                 </span>
//                 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-0 text-dark">
//                 <span className="d-none d-sm-inline text-dark">
//                   Product
//                 </span>
//                 2
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-0 text-dark">
//                 <span className="d-none d-sm-inline text-dark">
//                   Product
//                 </span>
//                 3
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-0 text-dark">
//                 <span className="d-none d-sm-inline ">Product</span>4
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href="#" className="nav-link px-0 align-middle">
//             <i className="fs-4 bi-people"></i>
//             <span className="ms-1 d-none d-sm-inline text-dark">
//               Customers
//             </span>
//           </a>
//         </li>
//       </ul>
//       <hr />
//       <div className="dropdown pb-4">
//         <a
//           href="#"
//           className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
//           id="dropdownUser1"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <img
//             src="https://github.com/mdo.png"
//             alt="hugenerd"
//             width="30"
//             height="30"
//             className="rounded-circle"
//           />
//           <span className="d-none d-sm-inline mx-1 text-dark">
//             loser
//           </span>
//         </a>
//         <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
//           <li>
//             <a className="dropdown-item text-light" href="#">
//               New project...
//             </a>
//           </li>
//           <li>
//             <a className="dropdown-item text-light" href="#">
//               Settings
//             </a>
//           </li>
//           <li>
//             <a className="dropdown-item text-light" href="#">
//               Profile
//             </a>
//           </li>
//           <li>
//             <hr className="dropdown-divide r" />
//           </li>
//           <li>
//             <a className="dropdown-item text-light" href="#">
//               Sign out
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Index = () => {
  const [userName, setUserName] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("loginUser");
    if (data) {
      const Name = JSON.parse(data);
      setUserName(Name.name);
    } else {
      navigation("/");
    }
  }, []);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function onLogout() {
    localStorage.removeItem("loginUser");
    navigation("/");
  }

  return (
    <div className="container-fluid">
      <div className="row min-vh-80 ">
        {/* <Outlet/>  */}
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Administrator
              </Typography>
              <div className="ms-auto  d-flex">
                <Dropdown className="ms-auto text-muted ">
                  <Dropdown.Toggle id="dropdown-basic" className="userIcon">
                    <AccountCircleIcon sx={{ fontSize: "35px" }} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#" className="text-dark h5">
                      {userName}
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#" className="text-dark h6">
                      <Button variant="text" onClick={() => onLogout()}>
                        Logout
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Toolbar>
          </AppBar>

          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <NavLink
                to="dashboard"
                className=" text-decoration-none text-dark"
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Dashboard"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <NavLink
                to="userslist"
                className=" text-decoration-none text-dark"
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="UsersList"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <NavLink
                to="samplepage"
                className=" text-decoration-none text-dark"
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Samplepage"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </List>
          </Drawer>
          <Box
            component="main"
            className="g-0"
            sx={{ flexGrow: 1, p: 1, py: 0 }}
          >
            <DrawerHeader />
            <Outlet />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Index;
