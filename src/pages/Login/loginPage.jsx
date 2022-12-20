import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../../redux/messageSlice";
import { login } from "../../redux/authSlice";
import { BsWindowSidebar } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        window.location.reload();
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className="bg-gray-50 justify-center items-center flex h-full absolute inset-0 ">
      <div className="border m-8 p-8 justify-center rounded-2xl shadow-2xl bg-white">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          Sign in to your Account
        </h2>
        {/* <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="justify-center"
        /> */}
        <br />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <div className="justify-center flex flex-col items-center">
            <Form>
              <div className="w-64 p-2 flex items-center">
                {/* <label htmlFor="username">Username</label> */}
                {/* <FaUser className="text-gray-400 m-2" /> */}
                <FaUser className="text-gray-400 m-2" />

                <Field
                  name="username"
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full my-2 p-2 bg-none rounded-lg border-solid border-2 border-gray-200 text-x"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
                <br />
              </div>

              <div className="w-64 p-2 flex items-center">
                {/* <label htmlFor="password">Password</label> */}
                <MdLock className="text-gray-400 m-2" />

                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full my-2 p-2 bg-none rounded-lg border-solid border-2 border-gray-200 text-x"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="w-64 p-2 flex justify-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  <br />
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span className="border-2 border-blue-500 text-blue-500 justify-center rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white">
                    Sign In
                  </span>
                </button>
              </div>
            </Form>
          </div>
        </Formik>
      </div>

      {message && (
        <div className="text-yellow-500">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
