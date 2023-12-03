import { Select } from "@chakra-ui/react";
import { blob } from "node:stream/consumers";

type Props = {};

const Rightpanel = (props: Props) => {
  return (
    <div className="relative ml-3 h-screen w-[80px] p-5 pt-8 duration-300 md:w-full">
      <div className="pt-28 text-2xl">
        <b>Filtrar por:</b>
        <Select placeholder="Cualquier Día" bg={"orange.100"} width={"90%"} borderColor={"blackAlpha.600"} className="my-6 cursor-pointer">
          <option value="semana">Esta Semana</option>
          <option value="mes">Este Mes</option>
          <option value="año">Este Año</option>
        </Select>

        <Select placeholder="Cualquier Lugar" bg={"orange.100"}  width={"90%"} borderColor={"blackAlpha.600"} className="my-6 cursor-pointer">
          <option value="local">Local</option>
          <option value="nacional">Nacional</option>
          <option value="regional">Regional</option>
        </Select>

        <Select placeholder="Cualquier Nivel" bg={"orange.100"}  width={"90%"} borderColor={"blackAlpha.600"} className="my-6 cursor-pointer">
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </Select>

        {/* <Select
          defaultSelectedKeys={["local"]}
          className="max-w-xs my-10"
        >
          <SelectItem key="local">Local</SelectItem>
          <SelectItem key="nacional">Nacional</SelectItem>
          <SelectItem key="regional">Regional</SelectItem>
        </Select>
        <Select
          placeholder="Select an animal"
          defaultSelectedKeys={["All"]}
          className="max-w-xs my-10"
        >
          <SelectItem key="All">Cualquier nivel</SelectItem>
          <SelectItem key="first">Principiante</SelectItem>
          <SelectItem key="second">Intermedio</SelectItem>
          <SelectItem key="third">Avanzado</SelectItem>
        </Select> */}
      </div>
      {/* <button>Filtrar</button> */}
    </div>
  );
};

export default Rightpanel;
