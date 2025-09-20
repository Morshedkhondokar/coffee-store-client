import React, { use } from 'react';
import AuthContext from '../context/AuthContext';

const SignIn = () => {
  const {signInUser} = use(AuthContext);

    const handleSignIn = (e) =>{
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        // SignIn in firebase
        signInUser(email,password)
        .then(result =>{
          console.log(result)
          const signInInfo = {
            email,
            lastSignInTime: result.user?.metadata?.lastSignInTime
          }

          // update lastSignInTime to the database
          fetch('http://localhost:3000/users',{
            method: 'PATCH',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(signInInfo)
          })
          .then(res => res.json())
          .then(data => {
            console.log( "after update patch ",data)
          })

        })
        .catch(error=> {
          console.log(error)
        })
    } 

    return (
         <div className="card bg-base-100  max-w-sm mx-auto mt-24 shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">SIgnIn now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          
          
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