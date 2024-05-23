import React, { useEffect, useState } from 'react';
import "../../css/modal.css";
import { useDispatch, useSelector } from 'react-redux';
import { closeForm } from '../../redux/MainReducer';
import { MdClose } from "react-icons/md";
import axios from 'axios';
import { baseUrl } from '../../MAIN_API';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { getUserObj } from '../../actions/MainAction';



const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const navigate=useNavigate()
  

    const [signupName,setSignupName]=useState("")
    const [signupLastname,setSignupLastname]=useState("")
    const [signupEmail,setSignupEmail]=useState("")
    const [signupPsw,setSignupPsw]=useState("")
    const [signupCheck,setSignupCheck]=useState(false)

    const [signinEmail,setSigninEmail]=useState("")
    const [signinPsw,setSigninPsw]=useState("")

    const dispatch = useDispatch()
    const { loginRegisterModal,userObj } = useSelector(state => state.Data)

    

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const signupNameFunc=(e)=>{
        setSignupName(e.target.value)
    }
    const signupLastnameFunc=(e)=>{
        setSignupLastname(e.target.value)
    }

    const signupEmailFunc=(e)=>{
        setSignupEmail(e.target.value)
    }

    const signupPswFunc=(e)=>{
        setSignupPsw(e.target.value)
    }

    const signupCheckFunc=(e)=>{
        setSignupCheck(e.target.checked)
        console.log(e.target.checked);
    }

    const signupFormSubmit=(e)=>{
        e.preventDefault()
        const data={
            first_name: signupName,
            last_name: signupLastname,
            email: signupEmail,
            password: signupPsw,
            accept_notifications: signupCheck
        }

        console.log(data);

        axios(`${baseUrl}accounts/register/`,{
            method: "POST",
            data
        }).then(resp=>{
            console.log(resp);
            Swal.fire({
                title: "Created",
                text: "User created",
                icon: "success",
                confirmButtonText: "OK",
            })
        }).catch(err => {
            Swal.fire({
                title: "Error",
                text: "user not created",
                icon: "error",
                confirmButtonText: "OK",
            })
        })
    }


    const signinEmailFunc=(e)=>{
        setSigninEmail(e.target.value)
    }

    const signinPswFunc=(e)=>{
        setSigninPsw(e.target.value)
    }

    const signinFormSubmit=(e)=>{
        e.preventDefault()

        const data={
            email: signinEmail,
            password: signinPsw
        }

        axios(`${baseUrl}accounts/login/email/`,{
            method: "POST",
            data
        }).then(resp=>{
            console.log(resp);
            if(resp.data.access_token){
                navigate('/game-sale-project')
                localStorage.setItem('access_token_game',resp.data.access_token)
                // localStorage.setItem('loggedInEmail',data.email)
               

                console.log(data.email);
                // dispatch(getUserObj(data.email))
                localStorage.setItem("loggedInEmail",data.email)
                window.location.reload();
            }
        }).catch(err=>{
            Swal.fire({
                title: "Error",
                text: "Login unsuccessful",
                icon: "error",
                confirmButtonText: "OK",
              })
        })
    }

    return (
        <div className="login">
            <div className='login_container fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50'>
                <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 max-w-lg w-full p-6">
                    <div className='close_form'>
                        <MdClose onClick={() => dispatch(closeForm())} className='close_form_icon' />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                            {isLogin ? (
                                <form onSubmit={signinFormSubmit} className="flex flex-col gap-4 pb-4">

                                    <h2 className="mb-4 text-2xl font-bold dark:text-white">Sign in</h2>
                                    <div>
                                        <div className="mb-2">
                                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="log_email">Email</label>
                                        </div>
                                        <div className="flex w-full rounded-lg pt-1">
                                            <div className="relative w-full">
                                                <input
                                                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-lg rounded-lg"
                                                    id='log_email'
                                                    type="email"
                                                    name="email"
                                                    placeholder="email@example.com"
                                                    required
                                                    value={signinEmail}
                                                    onChange={signinEmailFunc}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-2">
                                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="log_password">Password</label>
                                        </div>
                                        <div className="flex w-full rounded-lg pt-1">
                                            <div className="relative w-full">
                                                <input
                                                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-lg rounded-lg"
                                                    id="log_password"
                                                    type="password"
                                                    name="password"
                                                    required
                                                    placeholder='..........'
                                                    value={signinPsw}
                                                    onChange={signinPswFunc}
                                                />
                                            </div>
                                        </div>
                                        <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">Forgot password?</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            type="submit"
                                            className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                                        >
                                            <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                                                Sign in
                                            </span>
                                        </button>
                                        <button
                                            type="button"
                                            className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                                        >
                                            <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                                </svg>
                                                Sign in with Google
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={signupFormSubmit} className="flex flex-col gap-4 pb-4">
                                    <h2 className="mb-4 text-2xl font-bold dark:text-white">Sign Up</h2>
                                    <div>
                                        <div className="mb-2">
                                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="signup_firstname">First Name</label>
                                        </div>
                                        <div className="flex w-full rounded-lg pt-1">
                                            <div className="relative w-full">
                                                <input
                                                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-lg rounded-lg"
                                                    id='signup_firstname'
                                                    type="text"
                                                    name="signup_firstname"
                                                    placeholder="Mansur"
                                                    required
                                                    value={signupName}
                                                    onChange={signupNameFunc}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-2">
                                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="signup_lastname">Last Name</label>
                                        </div>
                                        <div className="flex w-full rounded-lg pt-1">
                                            <div className="relative w-full">
                                                <input
                                                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-lg rounded-lg"
                                                    id='signup_lastname'
                                                    type="text"
                                                    name="signup_lastname"
                                                    placeholder="Isayev"
                                                    required
                                                    value={signupLastname}
                                                    onChange={signupLastnameFunc}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-2">
                                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="signup_email">Email</label>
                                        </div>
                                        <div className="flex w-full rounded-lg pt-1">
                                            <div className="relative w-full">
                                                <input
                                                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-lg rounded-lg"
                                                    id='signup_email'
                                                    type="email"
                                                    name="email"
                                                    placeholder="email@example.com"
                                                    required
                                                    value={signupEmail}
                                                    onChange={signupEmailFunc}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-2">
                                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="signup_password">Password</label>
                                        </div>
                                        <div className="flex w-full rounded-lg pt-1">
                                            <div className="relative w-full">
                                                <input
                                                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-lg rounded-lg"
                                                    id="signup_password"
                                                    type="password"
                                                    name="password"
                                                    required
                                                    placeholder='..........'
                                                    value={signupPsw}
                                                    onChange={signupPswFunc}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div >
                                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="accept_notification">Accept notifications</label>
                                        </div>
                                        <div className="flex w-20 rounded-lg  ">
                                            <div className="relative w-full">
                                                <input
                                                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-lg rounded-lg"
                                                    id="accept_notification"
                                                    type="checkbox"
                                                    name="accept_notification"
                                                    
                                                    value={signupCheck}
                                                    onChange={signupCheckFunc}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            type="submit"
                                            className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                                        >
                                            <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                                                Sign Up
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                    <div className="min-w-[270px]">
                        <div className="mt-4 text-center dark:text-gray-200">
                            {isLogin ? (
                                <p>New user? <span className="text-blue-500 underline hover:text-blue-600 cursor-pointer" onClick={toggleForm}>Create account here</span></p>
                            ) : (
                                <p>Already have an account? <span className="text-blue-500 underline hover:text-blue-600 cursor-pointer" onClick={toggleForm}>Sign in here</span></p>
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Login;
