import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from "../../hooks/useToken";

const Login = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const {login,providerLogin} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation(); //for private route
  const navigate = useNavigate();//for private route
  const googleProvider = new GoogleAuthProvider();
  const from = location.state?.from?.pathname || '/';//for private route
  
  if(token){
    navigate(from, {replace: true});//for private route
  }
 
  const handleLogin = (data)=>{
    console.log(data);
    // reset when submit
    setLoginError('');

    login(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setLoginUserEmail(data.email);
      
    })
    .catch(err=>{
      console.log(err.message);
      setLoginError(err.message);
    });
  }

  const handleGoogleSignIn =()=>{
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate("/");
    })
    .catch(err=>console.log(err));
  }

  return (
    <div className="h-[600px] flex items-center justify-around ">
      <div className="w-96 p-7 shadow my-32 bg-secondary">
        <h1 className="text-3xl text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" {...register("email", { required: true})} aria-invalid={errors.email ? "true" : "false"} className="input input-bordered w-full max-w-xs"/>
            {errors.email?.type === 'required' && <p role="alert" className="text-error">Email is required</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", { required: "Password is required", minLength:{ value: 8,message: "Password must be 8 characters or longer"} })} className="input input-bordered w-full max-w-xs"/>
            {errors.password && <p  className="text-error">{errors.password?.message}</p>}
            <label className="label"><span className="label-text">Forget Password?</span></label>
          </div>
          
          <input type="submit" className="btn btn-accent w-full"  value="LOGIN"/>
          {/* Show Login Error message */}
          <div>
            {loginError && <p className="text-error">{loginError}</p>}
          </div>
        </form>
        <small >New to Sounds Mart ? <Link  className="text-sky-900 font-bold" to="/signup">Create new account</Link></small>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
