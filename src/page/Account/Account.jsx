import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Account() {
  const form = useFormik({
    initialValues: {
      firstName: "",
      password: "",
      passwordConfirm: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("You must need to provide your email address")
        .email("You must need to provide your email address"),
      password: Yup.string().required("You must need to provide your password"),
      passwordConfirm: Yup.string().required(
        "You must need to provide your password"
      ),
      firstName: Yup.string().required("First name is required"),
      phone: Yup.string().required("Phone number is required"),
      lastName: Yup.string().required("Last name is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //--------------
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#02b291" : "#02b291",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#02b291" : "#02b291",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  return (
    <div className="Account-header">
      <div className="Form-account">
        <div className="Form-lable">
          <div className="Form-content">
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "30px",
              }}
            >
              Personal Information
            </h2>
            <form action="" onSubmit={form.handleSubmit}>
              <div className="form-top">
                <div className="form-top-fa">
                  <div className="form-top-fa-items1">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "49%",
                        marginBottom:"20px"
                      }}
                    >
                      <label htmlFor="" style={{ marginBottom: "5px" }}>
                        First Name *
                      </label>
                      <input
                        className="input-top"
                        type="text"
                        id="firstName"
                        name="firstName"
                        // onChange={form.handleChange}
                        // onBlur={form.handleBlur}
                      />
                      {form.errors.firstName ? (
                        <span className="text-danger" style={{fontSize:"14px",marginTop:"10px"}}>
                          {form.errors.firstName}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "49%",
                      }}
                    >
                      <label htmlFor="" style={{ marginBottom: "5px" }}>
                        Last Name *
                      </label>
                      <input
                        className="input-top"
                        type="text"
                        id="lastName"
                        name="lastName"
                        // onChange={form.handleChange}
                        // onBlur={form.handleBlur}
                      />
                      {form.errors.lastName ? (
                        <span className="text-danger" style={{fontSize:"14px",marginBottom:"20px",marginTop:"10px"}}>
                          {form.errors.lastName}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-top-fa-items2">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "49%",
                        marginBottom:"30px"
                      }}
                    >
                      <label htmlFor="" style={{ marginBottom: "5px" }}>
                        Phone/Mobile *
                      </label>
                      <input
                      style={{marginBottom:"10px"}}
                        className="input-bot"
                        type="text"
                        id="phone"
                        name="phone"
                        // onChange={form.handleChange}
                        // onBlur={form.handleBlur}
                      />
                      {form.errors.phone ? (
                        <span className="text-danger" style={{fontSize:"14px",marginBottom:"10px"}}>{form.errors.phone}</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "30px",
                }}
              >
                Account Information
              </h2>
              <div className="form-bot">
                <div className="form-bot-fa">
                  <div className="form-bot-fa-items1">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "49%",
                        marginBottom:"20px"
                      }}
                    >
                      <label style={{ marginBottom: "5px" }} htmlFor="">
                        Email *
                      </label>
                      <input
                        className="input-top"
                        type="email"
                        id="email"
                        name="email"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {form.errors.email ? (
                        <span className="text-danger" style={{fontSize:"14px",marginBottom:"20px",marginTop:"10px"}}>{form.errors.email}</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div
                    className="form-bot-fa-items2"
                    style={{ display: "flex" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "49%",
                        marginBottom: "35px",
                      }}
                    >
                      <label style={{ marginBottom: "5px" }} htmlFor="">
                        Password
                      </label>
                      <input
                        className="input-bot"
                        type="password"
                        id="password"
                        name="password"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {form.errors.password ? (
                        <span className="text-danger" style={{fontSize:"14px",marginTop:"10px"}}>
                          {form.errors.password}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "49%",
                        marginBottom:"35px"
                      }}
                    >
                      <label style={{ marginBottom: "5px" }} htmlFor="">
                        Confirm Password
                      </label>
                      <input
                        className="input-bot"
                        type="password"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {form.errors.passwordConfirm ? (
                        <span className="text-danger" style={{fontSize:"14px",marginTop:"10px"}}>
                          {form.errors.passwordConfirm}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="form-select1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="form-select-top">
                  <h3 style={{ fontSize: "17px", fontWeight: "600" }}>
                    Share Profile Data
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "#4c4c4c",
                    }}
                  >
                    Share your profile information to collect the product search
                    result
                  </p>
                </div>
                <div className="form-select-bot">
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    label=""
                  />
                </div>
              </div>
              <div
                className="form-select2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="form-select-top">
                  <h3 style={{ fontSize: "17px", fontWeight: "600" }}>
                    Share Profile Data
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "#4c4c4c",
                    }}
                  >
                    Share your profile information to collect the product search
                    result
                  </p>
                </div>
                <div className="form-select-bot">
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    label=""
                  />
                </div>
              </div>
              <div className="form-submit">
                <button>Save Chanhes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
