import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";


type Props = {};

const Cardsevents = (props: Props) => {
  const list = [
    {
      title: "Orange",
      img: "https://www.fundeu.es/wp-content/uploads/2019/07/deporteslima.jpg",
      price: "$5.50",
      date: "2023-04-05",
      participants: 12,
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
      date: "2023-04-05",
      participants: 12,
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
      date: "2023-04-05",
      participants: 12,
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
      date: "2023-04-05",
      participants: 12,
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
      date: "2023-04-05",
      participants: 12,
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
      date: "2023-04-05",
      participants: 12,
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
      date: "2023-04-05",
      participants: 12,
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      date: "2023-04-05",
      participants: 12,
    },
    {
        title: "Banana",
        img: "/images/fruit-7.jpeg",
        price: "$7.50",
        date: "2023-04-05",
        participants: 12,
      },
      {
        title: "Watermelon",
        img: "/images/fruit-8.jpeg",
        price: "$12.20",
        date: "2023-04-05",
        participants: 12,
      },
  ];

  // Función para formatear la fecha
  const formatDate = (fechaJson: string) => {
    const fecha = new Date(fechaJson);
    return fecha.toLocaleString("es-ES", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Número de elementos por página
  const itemsPerPage = 4;

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calcular los elementos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = list.slice(startIndex, endIndex);


  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:w-[89%]">
      {itemsToShow.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
          className=' hover:shadow-lg'
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="h-[200px] w-full object-cover"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="flex flex-col items-start text-small">
            <b className=" text-xl">{item.title}</b>
            <p className="text-default-500">{item.price}</p>
            <p>{formatDate(item.date)}</p>{" "}
            {/* Usar la función para mostrar la fecha formateada */}
            <div className="mt-2 flex w-full h-[35px] items-center text-left">
                <div className="w-[80%] items-center flex">
              <img
                className="inline-block h-6 w-6 rounded-full ring-2"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt={item.title}
              />
              <p className="ml-5 text-default-500">{item.participants} participantes</p>
              </div>
              <div className="w-[30%] h-full">
                <button className="h-full w-full rounded bg-secondary-500 hover:bg-primary-500 hover:text-white">
                  Unirse
                </button>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
      <button onClick={prevPage}>Anterior</button>
      <button onClick={nextPage}>Siguiente</button>
    </div>
  );
};

export default Cardsevents;
