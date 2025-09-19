import React from 'react';

const SignIn = () => {

    const handleSignIn = (e) =>{
        e.preventDEfault()
    } 

    return (
         <div className="card bg-base-100  max-w-sm mx-auto mt-24 shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">SIgnIn now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
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
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
      </div>
    </div>
    );
};

export default SignIn;