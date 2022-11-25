import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../Hooks/useToken';

const Signup = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    // signup error
    const [signupError, setSignUpError] = useState();
    const {createUser, updateUser,providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
      navigate('/');
    }

    const handleSignup = data =>{
        // if new signup after ontime signup error, form will be reset
        setSignUpError('');

        createUser(data.email, data.password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          // toast for sign
          toast('User created successfully');
          // profile Update after signup
          const userInfo = {
            displayName: user.name
          }
          updateUser(userInfo)
          .then(()=>{
            saveUser(data.name, data.email);
            
          })
          .catch(err => console.log(err));
        })
        .catch(err=>{
          console.log(err);
          // show firebase signup error
          setSignUpError(err.message);
        });
    }

    const saveUser = (name, email) =>{
      const user = {name, email};
      fetch(`https://y-six-alpha.vercel.app/users`,{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
        console.log('save user',data);
        setCreatedUserEmail(email);
      })
    }

    

    const handleGoogleSignIn =()=>{
      providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate('/');
      })
      .catch(err=>console.log(err));
    }

    return (
        <div className="h-[800px] flex items-center justify-around">
      <div className="w-96 p-7 shadow mt-20 bg-primary">
        <h1 className="text-3xl text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full my-2">
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text" {...register("name",{
                required: "Name is required"
            })} className="input input-bordered w-full max-w-xs"/>
            {errors.name && <p className="text-error">{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full my-2">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" {...register("email", {
                required: "Email is required",
            })} className="input input-bordered w-full max-w-xs"/>
            {errors.email && <p className="text-error">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", {
            required: "Password is required", 
            minLength:{ value: 8, message:"Password must be at least 8 characters or more"},
            pattern:{value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be Uppercase,Lowercase, Number and Special character '}
            })} className="input input-bordered w-full max-w-xs"/>
            {errors.password && <p className="text-error">{errors.password?.message}</p>}
          </div>
          <input type="submit" className="btn btn-accent w-full"  value="SIGN UP"/>
          {/* error message show */}
          {
            signupError && <p className="text-error">{signupError}</p>
          }
        </form>
        <small >Already have an account ? <Link className="text-secondary" to="/login">Please Login</Link></small>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default Signup;