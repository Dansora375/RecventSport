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


  return (
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
  );
}

export default App;
