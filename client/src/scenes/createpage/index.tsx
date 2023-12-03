import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  StarIcon,
  CalendarDaysIcon,
  TagIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Textarea,
  Center,
  useToast,
} from "@chakra-ui/react";

import React, { useContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate} from "react-router-dom";
import { UserErrors } from "../../../../server/src/errors";

export function CreateEvent() {
  //Base de datos
  const [_, setCookies] = useCookies(["access_token"]);
  const [title, setTitle] = useState<string>("");
  const [image_url, setImage_url] = useState<string>("");
  const [cat, setCat] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [level, setLevel] = useState<string>("");

  //manejo de paginas
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.post("http://localhost:3001/user/register", {
  //       title,
  //       image_url,
  //       cat,
  //       description,
  //       date,
  //       city,
  //       level,
  //     });
  //     // alert("Registration Completed! Now login.");
  //   } catch (err) {
  //     if (err.response.data.type === UserErrors.NO_USER_FOUND) {
  //       alert("ERROR: No user found");
  //     } else {
  //       alert("ERROR: Something went wrong");
  //     }
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!areAllFieldsFilled()) {
      toast({
        title: 'Detente ahí',
        description: "Aún tienes campos sin completar",
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    } else {
      try {
        await axios.post("http://localhost:3001/feed/create_post", {
          title,
          image_url,
          cat,
          description,
          date,
          city,
          level,
        });
        toast({
          title: 'Evento creado',
          description: "Ahora los demás podrán asistir a tu evento",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        navigate('/eventos');
      } catch (err) {
        if (err.response.data.type === UserErrors.NO_USER_FOUND) {
          alert("ERROR: No user found");
        } else {
          alert("ERROR: Something went wrong");
        }
      }
    }
  };

  const areAllFieldsFilled = () => {
    // Verifica si todos los campos están llenos o seleccionados
    return (
      title !== "" &&
      level !== "" &&
      city !== "" &&
      date !== "" &&
      description !== "" &&
      image_url !== "" &&
      cat !== ""
    );
  };

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const toast = useToast();

  return (
    <div className="flex h-screen w-full justify-center bg-deep-orange-50">
      <div className="my-10 w-[75%] rounded-xl bg-white px-24 py-4 shadow-2xl">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className="mt-10"
        >
          <Step onClick={() => setActiveStep(0)}>
            <StarIcon className="h-5 w-5" />
            <div className="absolute -bottom-[40px] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Titulo
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <CalendarDaysIcon className="h-5 w-5" />
            <div className="absolute -bottom-[40px] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Lugar y fecha
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <Squares2X2Icon className="h-5 w-5" />
            <div className="absolute -bottom-[40px] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                Descripción
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(3)}>
            <TagIcon className="h-5 w-5" />
            <div className="absolute -bottom-[40px] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 3 ? "blue-gray" : "gray"}
              >
                Imagen y categoria
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-12 flex h-[65%]">
          <div
            className={`${
              activeStep === 0 ? "block" : "hidden"
            } flex h-full w-full`}
          >
            <div className="flex h-full w-1/2 justify-center text-center">
              <b className="mr-20 mt-7 w-full text-lg">
                Nombrar tu evento deportivo es como darle vida a un sueño. Es la
                chispa que enciende la pasión y la emoción en cada atleta y
                espectador. ¡Es el rugido en el estadio, el grito de victoria y
                la conexión que une a todos los amantes del deporte! Así que,
                elige un nombre que inspire, que haga vibrar corazones y que
                convierta tu evento en una experiencia inolvidable. ¡Deja que el
                mundo conozca la grandeza de tu torneo, porque, al fin y al
                cabo, el nombre en el juego es el juego en el nombre!
              </b>
            </div>
            <div className="flex h-full w-1/2 flex-col justify-center text-start">
              <b className="text-xl">Ponle un Titulo a tu evento:</b>
              <Input
                placeholder="Escribe aquí"
                size="lg"
                isRequired
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <b className="mt-10 text-xl">
                Escoge el nivel de dificultad de tu evento
              </b>
              <FormControl className="mb-10" isRequired>
                <Select
                  placeholder="Selecciona un nivel de dificultad"
                  value={level}
                  onChange={(event) => setLevel(event.target.value)}
                  size={"lg"}
                  isRequired
                >
                  <option value={"Principiante"}>Principiante</option>
                  <option value={"Intermedio"}>Intermedio</option>
                  <option value={"Avanzado"}>Avanzado</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div
            className={`${
              activeStep === 1 ? "block" : "hidden"
            } flex h-full w-full`}
          >
            <div className="flex h-full w-1/2 justify-center text-center">
              <b className="mr-20 mt-7 w-full text-lg">
                Encontrar el lugar y la fecha perfectos para tu evento deportivo
                es como unir a dos almas gemelas. ¡Es la magia que hace que todo
                cobre vida! Así que, busca el escenario ideal y marca una fecha
                en el calendario que haga historia. ¡Deja que la emoción y la
                anticipación crezcan mientras el reloj avanza hacia ese día
                inolvidable! ¡El lugar y la fecha son los pilares de tu éxito,
                así que elige sabiamente y prepárate para un épico evento
                deportivo que quedará grabado en la memoria de todos
              </b>
            </div>
            <div className="flex h-full w-1/2 flex-col justify-center text-start">
              <b className="text-xl">Escoge una ciudad:</b>
              <FormControl className="mb-10">
                <Select
                  placeholder="Selecciona una ciudad"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  isRequired
                >
                  <option value={"Bogotá"}>Bogotá</option>
                  <option value={"Medellin"}>Medellin</option>
                </Select>
              </FormControl>
              <b className="text-xl">Escoge una fecha y hora:</b>
              <Input
                placeholder="Selecciona una fecha y hora"
                size="md"
                type="datetime-local"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                isRequired
              />
            </div>
          </div>
          <div
            className={`${
              activeStep === 2 ? "block" : "hidden"
            } flex h-full w-full`}
          >
            <div className="flex h-full w-1/2 justify-center text-center">
              <b className="mr-20 mt-7 w-full text-lg">
                La descripción de tu evento deportivo es como el prólogo de una
                gran historia. Es la oportunidad de pintar un cuadro vívido de
                lo que está por venir, de despertar la curiosidad y el
                entusiasmo en tu audiencia. Desde las emocionantes competencias
                hasta la camaradería de los participantes, cada palabra que
                elijas debe transmitir la pasión y el espíritu que definirán tu
                evento. Prepárate para vivir un día lleno de acción, emoción y
                unión, ¡porque este es el evento deportivo que no te querrás
                perder!
              </b>
            </div>
            <div className="flex h-full w-1/2 flex-col justify-center text-start">
              <b className="text-xl">
                Ponle una descripción a tu evento deportivo:
              </b>
              <Textarea
                placeholder="Escribe Aquí"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                isRequired
              />
            </div>
          </div>

          <div
            className={`${
              activeStep === 3 ? "block" : "hidden"
            } flex h-full w-full`}
          >
            <div className="flex h-full w-1/2 justify-center text-center">
              <b className="mr-20 mt-7 w-full text-lg">
                La imagen y la categoría de tu evento deportivo son como el
                atuendo y el género musical de una fiesta: ¡definen la atmósfera
                y la experiencia! La imagen debe captar la esencia del evento,
                ya sea un emocionante partido de fútbol, una maratón de
                resistencia o un torneo de golf elegante. Y la categoría
                deportiva es el género que guía a los aficionados hacia lo que
                más les apasiona. ¡Así que prepárate para una montaña rusa de
                emociones, ya que nuestra imagen y categoría te transportarán al
                mundo del deporte que amas!
              </b>
            </div>
            <div className="flex h-full w-1/2 flex-col justify-center text-start">
              <b className="text-xl">Pon el link de tu imagen:</b>
              <Input
                placeholder="Escribe aquí"
                size="lg"
                value={image_url}
                onChange={(event) => setImage_url(event.target.value)}
                isRequired
              />
              <b className="mt-8 text-xl">Escoge la categoría:</b>
              <FormControl className="mb-10">
                <Select
                  placeholder="Selecciona una categoría"
                  value={cat}
                  onChange={(event) => setCat(event.target.value)}
                  isRequired
                >
                  <option value={"Fútbol"}>Fútbol</option>
                  <option value={"Baloncesto"}>Baloncesto</option>
                  <option value={"Voleibol"}>Voleibol</option>
                  <option value={"Ciclismo"}>Ciclismo</option>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          {isLastStep ? (
            <Button type="submit"  
            onClick={handleSubmit}>
              Finalizar
            </Button>
          ) : (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
