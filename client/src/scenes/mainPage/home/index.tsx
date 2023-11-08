import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import Image1MainPage from "@/assets/image1MainPage.png";
import DEPORTINDER from "@/assets/DEPORTINDER.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  setIsSignIn: (value:boolean) => void;
  onOpen: () => void;
};

const Home = ({ setSelectedPage,setIsSignIn,onOpen }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-52 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-60 before:-left-56 before:z-[-1] md:before:content-bgtinder">
                <img alt="home-page-text" src={DEPORTINDER} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Cualquiera que sea tu deporte favorito (fútbol, baloncesto,
              voleibol, ciclismo u otro), encontrarás a otros apasionados que
              comparten tu interés en nuestra comunidad deportiva. Descubre
              eventos emocionantes todos los días y regístrate para unirte a la
              acción
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"  onClick={() => {setIsSignIn(false);onOpen()}}>
              Unirse
            </button>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Leer más</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-20 md:justify-items-end"
        >
          <img alt="image-one-home-page" src={Image1MainPage} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
