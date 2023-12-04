import Navbar from "@/scenes/mainPage/navbar";
import Home from "@/scenes/mainPage/home";
import Beneficios from "@/scenes/mainPage/beneficios";
import Categorias from "@/scenes/mainPage/categorias";
import ContactUs from "@/scenes/mainPage/contactUs";
import Footer from "@/scenes/footer";
import ProfilePage from "@/scenes/profile";
import Events from "@/scenes/feedPage";
import SignIn from "@/scenes/loginform";


import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useDisclosure } from "@chakra-ui/react"
import {NextUIProvider} from "@nextui-org/react";
import { CreateEvent } from "./scenes/createpage";

import { UserContext } from '@/shared/usercontext'; // Asegúrate de importar el contexto
import React from "react";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [signIn, setIsSignIn] = useState<boolean>(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [user, setUser] = React.useState(null);
  // Al cargar la aplicación, intenta recuperar los datos del usuario del almacenamiento local
  useEffect(() => {
    const storedUser = window.localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Cuando el usuario cambia, actualiza el almacenamiento local
  useEffect(() => {
    if (user) {
      window.localStorage.setItem('user', JSON.stringify(user));
    } else {
      window.localStorage.removeItem('user');
    }
  }, [user]);


  return (
    <UserContext.Provider value={{ user, setUser }}>
    <NextUIProvider>
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app bg-gray-20">
            <Navbar
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsSignIn={setIsSignIn}
              onOpen={onOpen}
            />
            <SignIn isOpen={isOpen} onClose={onClose} signIn={signIn} setIsSignIn={setIsSignIn}/>
            <Home setSelectedPage={setSelectedPage} setIsSignIn={setIsSignIn} onOpen={onOpen}/>
            <Beneficios setSelectedPage={setSelectedPage} />
            {/* <Categorias setSelectedPage={setSelectedPage} />
            <ContactUs setSelectedPage={setSelectedPage} /> */}
            <Footer />
          </div>
        } />
        <Route path="/perfil" element={
          <ProfilePage />}
        />
        <Route path="/eventos" element={
          <Events />}
        />
        <Route path="/creareventos" element={
          <CreateEvent />}
        />
      </Routes>
    </Router>
    </NextUIProvider>
    </UserContext.Provider>
  );
}

export default App;
