import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom';

import React, { useContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
//
import { UserErrors } from "../../../../server/src/errors";
//import { IShopContext, ShopContext } from "../../context/shop-context";

type Props = {
    isOpen: boolean;
    signIn: boolean;
    onClose: () => void;
    setIsSignIn: (value:boolean) => void;
};

const SignIn = ({ isOpen, onClose, signIn, setIsSignIn}: Props) => {

    const [_, setCookies] = useCookies(["access_token"]);
    //const { setIsAuthenticated } = useContext<IShopContext>(ShopContext);

    const [email, setemail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const handleSubmit = async (event ) => {
        event.preventDefault();

        try {
        const result = await axios.post("http://localhost:3001/user/login", {
            email,
            password,
        });

        setCookies("access_token", result.data.token);
        window.localStorage.setItem("userID", result.data.userID);
        //setIsAuthenticated(true);
        navigate("/eventos");
        } catch (err) {
        let errorMessage: string = "";
        switch (err.response.data.type) {
            case UserErrors.USERNAME_ALREADY_EXISTS:
            errorMessage = "User already exists";
            break;
            case UserErrors.WRONG_CREDENTIALS:
            errorMessage = "Wrong email/password combination";
            break;
            default:
            errorMessage = "Something went wrong";
        }

        alert("ERROR: " + errorMessage);
        }
    };

    const handleSubmit2 = async (event) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:3001/user/register", {
            email,
            password,
          });
          alert("Registration Completed! Now login.");
        } catch (err) {
          if (err.response.data.type === UserErrors.NO_USER_FOUND) {
            alert("ERROR: No user found");
          } else {
            alert("ERROR: Something went wrong");
          }
        }
      };




    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered >
            <ModalOverlay className="bg-[#000] !opacity-20" />
            <ModalContent className="bg-white shadow-2xl relative overflow-hidden min-w-[678px] max-w-full min-h-[400px]">
                <ModalCloseButton zIndex={150} />
                <ModalBody>
                    <div
                        className={`absolute top-0 h-full transition-all duration-500 ease-in-out left-0 w-1/2 opacity-0 z-[1] ${!signIn ? "translate-x-full opacity-100 z-[5]" : ""
                            }`}
                    >
                        <form onSubmit={handleSubmit2} className="bg-white flex items-center justify-center flex-col py-0 px-[50px] h-full text-center">
                            <h1 className="font-bold text-4xl text-black m-0">Create Account</h1>
                            <input type="text" className="bg-gray-200 border-none py-3 px-4 my-2 w-full" placeholder="Nombre" />
                            <input id="email"
            value={email}
            onChange={(event) => setemail(event.target.value)}   className="bg-gray-200 border-none py-3 px-4 my-2 w-full" type="email" placeholder="Email" />
                            <input value={password}
            onChange={(event) => setPassword(event.target.value)} className="bg-gray-200 border-none py-3 px-4 my-2 w-full" type="password" placeholder="Password" />
                            <button type="submit"
                                className="rounded-[20px] border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-[45px] tracking-wide uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none hover:bg-black hover:border-black"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>

                    <div
                        className={`absolute top-0 h-full transition-all duration-500 ease-in-out left-0 w-1/2 z-[2] ${!signIn ? "translate-x-full" : ""
                            }`}
                    >
                        <form onSubmit={handleSubmit} className="bg-white flex items-center justify-center flex-col py-0 px-[50px] h-full text-center">
                            <h1 className="font-bold text-4xl text-black m-0">Sign in</h1>
                            <input 
            id="email"
            value={email}
            onChange={(event) => setemail(event.target.value)} className="bg-gray-200 border-none py-3 px-4 my-2 w-full" type="email" placeholder="Email" />
                            <input 
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} className="bg-gray-200 border-none py-3 px-4 my-2 w-full" type="password" placeholder="Password" />
                            <a className="text-gray-800 text-sm underline my-[15px]" href="#">
                                Forgot your password?
                            </a>
                            <button type="submit"
                                className="rounded-[20px] border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-[45px] tracking-wide uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none hover:bg-black hover:border-black"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>

                    <div
                        className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transform transition-transform duration-500 ease-in-out z-[100] ${!signIn ? "-translate-x-full" : ""
                            }`}
                    >
                        <div
                            className="bg-gradient-to-r over from-red-600 to-pink-600 bg-cover bg-no-repeat bg-left-top  text-white relative h-full w-[200%] transform transition-transform duration-500 ease-in-out ${signIn ? 'translate-x-1/2' : ''}"
                        >
                            <div className={`absolute flex items-center justify-center flex-col px-10 py-0 text-center top-0 h-full w-1/2 transform transition-transform duration-500 ease-in-out ${!signIn ? "translate-x-0" : "translate-x-[-20%] hidden"}`}>
                                <h1 className="font-bold text-4xl text-white m-0">Welcome Back!</h1>
                                <p className="text-sm font-[100] leading-5 tracking-[0.5px] my-5 mx-[30px]">
                                    To keep connected with us please login with your personal info
                                </p>
                                <button
                                    className="rounded-[20px] border border-white bg-transparent text-white text-xs font-bold py-3 px-[45px] tracking-wide uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none hover:bg-white hover:text-black"
                                    onClick={() => setIsSignIn(true)}
                                >
                                    Sign In
                                </button>
                            </div>

                            <div className={`absolute flex items-center justify-center flex-col px-10 py-0 text-center top-0 h-full w-1/2 transform transition-transform duration-500 ease-in-out ${!signIn ? "translate-x-[20%] hidden" : "translate-x-0"}`}>
                                <h1 className="font-bold text-4xl text-white m-0">Hello, Friend!</h1>
                                <p className="text-sm font-[100] leading-5 tracking-[0.5px] my-5 mx-[30px]">
                                    Enter Your personal details and start journey with us
                                </p>
                                <button
                                    className="rounded-[20px] border border-white bg-transparent text-white text-xs font-bold py-3 px-[45px] tracking-wide uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none hover:bg-white hover:text-black"
                                    onClick={() => setIsSignIn(false)}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SignIn;