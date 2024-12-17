"use client"
import { useForm } from "react-hook-form"
import { loginAction } from "./action/loginAction";
import {useState} from "react";
import { TiInfoOutline } from "react-icons/ti";
const LoginForm = () => {

  const{handleSubmit,register,reset,formState:{errors}}=useForm();
  const [errorMessage,setErrorMessage] = useState(null)
  const onSubmit= async(data)=>{
    const res = await  loginAction(data);
    setErrorMessage(res?.error)
    console.log("Respones:",res);
    

  };

  return (
    <div className="max-w-lg mx-auto mt-20 bg-gray-800 rounded-lg min-h-[300px] p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col gap-3 w-full">
            <label className="text-white">username</label>
            <input type="text" 
            {...register("username",{required: true})} className="p-1 outline-none border border-gray-200 rounded-lg"/>
            {
            errors.username?.type == "required" && (<p className="text-red-500">
              username required
            </p>
            ) }
        </fieldset>
        <fieldset className=" my-2 flex flex-col gap-3 w-full">
            <label className="text-white">password</label>
            <input type="password"
             {...register("password",{required:true})} 
             className="p-1 outline-none border border-gray-200 rounded-lg"/>
              {
            errors.password?.type == "required" && (<p className="text-red-500">
              password required
            </p>
            ) }
        </fieldset>
        <fieldest>
          <button  className="px-5 py-1 bg-blue-700 text-white  rounded-lg mt-5" type="submit">Login</button>
        </fieldest>
      </form>
      {
        errorMessage && <div className="text-red-500 text-center  mt-6  justify-center items-center  gap-3 flex flex-row">
          <span><TiInfoOutline /></span>
          <span>{errorMessage}</span>
        
        </div>
      }
    </div>
  )
}

export default LoginForm
