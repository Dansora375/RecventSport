import Content from "./content";
import NavbarEvents from "./navbar";


type Props = {}

function Events({}: Props) {
  return (
    <div className="app bg-gray-100">
      <NavbarEvents />
      <Content />
    </div>
  );
}

export default Events