import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import EditIcon from "@mui/icons-material/Edit";
import ModalConfirm from "../ModalConfirm";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },

  {
    id: "email",
    label: "Email",
    minWidth: 170,
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 100,
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

const Index = () => {
  const [resData, setResData] = useState([]);
  const [searchingData, setSearchingData] = useState([]);
  const [sorted, setSort] = useState(true);
  const [sortedEmail, setSortedEmail] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [verify, setVerify] = useState(false);
  const [admin, setAdmin] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    const isUser = localStorage.getItem("loginUser");
    if (isUser) {
      getuserData();
      getToken();
    } else {
      navigation("/");
    }
  }, []);

  // function onDeleteUserData() {
  //   axios
  //     .delete("http://localhost:3002/login/" + deleteId)
  //     .then((res) => {
  //       console.log(res);
  //       //navigate("/");
  //       //setResData(res.data);
  //       window.location.relode();
  //     })
  //     .catch((err) => console.log(err));
  // }

  function getToken() {
    const token = localStorage.getItem("jwt_token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    if (decoded.role === "admin") {
      setAdmin(false);
    } else {
      setAdmin(true);
    }
  }

  function getuserData() {
    axios
      .get("http://localhost:3002/login")
      .then((res) => {
        console.log(res);
        //navigate("/");
        const SortedAscList = res.data.sort((a, b) => {
          return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
        });
        setResData(SortedAscList);
        setSearchingData(SortedAscList);
      })
      .catch((err) => console.log(err));
  }

  function onSearchUsers(event) {
    const text = event.target.value;
    //setSearch(text);
    usersFiltering(text);
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function usersFiltering(text) {
    //console.log(text);
    const searchedDataList = searchingData.filter(
      (eachUser) =>
        eachUser.name.toLowerCase().includes(text.toLowerCase()) === true
    );
    if (searchedDataList.length <= 5) {
      setResData(searchedDataList);
      setRowsPerPage(5);
      setPage(0);
    } else {
      setResData(searchedDataList);
    }
  }

  function onChangeSortedDescList(label) {
    //console.log("sorted dsc");
    if (label === "Name") {
      const SortedDescList = resData.sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
      });
      setResData(SortedDescList);
      setSort(false);
    } else {
      const SortedDescList = resData.sort((a, b) => {
        return a.email.toLowerCase() > b.email.toLowerCase() ? -1 : 1;
      });
      setResData(SortedDescList);
      //setSort(false);
      setSortedEmail(false);
    }
  }

  function onChangeId(id) {
    setDeleteId(id);
    setVerify(true);
  }

  function handleClose() {
    setVerify(false);
  }

  function onChangeSortedAscList(label) {
    //console.log("sorted");
    if (label === "Name") {
      const SortedAscList = resData.sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });
      setResData(SortedAscList);
      setSort(true);
    } else {
      const SortedAscList = resData.sort((a, b) => {
        return a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1;
      });
      setResData(SortedAscList);
      //setSort(true);
      setSortedEmail(true);
    }
  }

  function onEditId(id) {
    navigation("/user/" + id);
  }

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "1px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
        className="ms-auto my-3 bg-secondary "
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Users"
          inputProps={{ "aria-label": "search users" }}
          onChange={(event) => onSearchUsers(event)}
          className="text-white"
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon className="text-white" />
        </IconButton>
      </Paper>
      <Paper sx={{ width: "90%", overflow: "hidden" }} className="my-2">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) =>
                  column.label === "Actions" ? (
                    admin ? (
                      ""
                    ) : (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        className="fs-5 fw-bold"
                      >
                        {column.label}
                      </TableCell>
                    )
                  ) : column.label === "Name" ? (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className="fs-5 fw-bold"
                    >
                      {sorted ? (
                        <Button
                          className="text-dark"
                          onClick={() => onChangeSortedDescList(column.label)}
                        >
                          <NorthIcon /> {column.label}
                        </Button>
                      ) : (
                        <Button
                          className="text-dark"
                          onClick={() => onChangeSortedAscList(column.label)}
                        >
                          <SouthIcon /> {column.label}
                        </Button>
                      )}
                    </TableCell>
                  ) : (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className="fs-5 fw-bold"
                    >
                      {sortedEmail ? (
                        <Button
                          className="text-dark"
                          onClick={() => onChangeSortedDescList(column.label)}
                        >
                          <NorthIcon /> {column.label}
                        </Button>
                      ) : (
                        <Button
                          className="text-dark"
                          onClick={() => onChangeSortedAscList(column.label)}
                        >
                          <SouthIcon /> {column.label}
                        </Button>
                      )}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {resData.length > 0 ? (
                resData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row._id}
                      >
                        {columns.map((column) => {
                          if (column.id === "actions") {
                            return admin ? (
                              ""
                            ) : (
                              <TableCell key={"button"} align={column.align}>
                                <Button
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={() => onChangeId(row._id)}
                                >
                                  <DeleteOutlineIcon />
                                </Button>
                                <Button onClick={() => onEditId(row._id)}>
                                  <EditIcon />
                                </Button>
                              </TableCell>
                            );
                          } else {
                            const value = row[column.id];
                            return (
                              <TableCell key={value} align={column.align}>
                                {value}
                              </TableCell>
                            );
                          }
                        })}
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow className="text-center ">
                  <b>Not Found</b>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 15, 100]}
          component="div"
          count={resData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <div
        className="modal fade mt-5 pt-5"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalLabel">
                Confirmation Message
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure, You want to delete this user details</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onDeleteUserData()}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {verify ? (
        <ModalConfirm
          show={verify}
          handleClose={handleClose}
          id={deleteId}
          reload={getuserData}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Index;
