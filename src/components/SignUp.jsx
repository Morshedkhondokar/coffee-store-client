import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

   
    // create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

         const userProfile = {
        email,
        ...restFormData,
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.lastSignInTime
    }
    console.log(email, password, userProfile);


        // save the user profile Info  to DB
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
           
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is Created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100  max-w-sm mx-auto mt-24 shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">SIgnUp now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Name" />
          <label className="label">Address</label>
          <input
            type="text"
            className="input"
            name="address"
            placeholder="Address"
          />
          <label className="label">Phone</label>
          <input
            type="text"
            className="input"
            name="phone"
            placeholder="Number"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            className="input"
            name="photo"
            placeholder="Photo URL"
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
