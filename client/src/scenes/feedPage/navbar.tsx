import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Avatar,
  Badge,
} from "@nextui-org/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import {
  MagnifyingGlassIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterTextIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';

type Props = {};

function NavbarEvents({}: Props) {
  return (
    <Navbar
      className="bg-gray-20 py-1 drop-shadow"
      isBordered
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent justify="center">
        <NavbarBrand>
            <img alt="logo" src={Logo} className="w-32" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        as="div"
        className="flex w-full items-center"
        justify="center"
      >
        <Input
          classNames={{
            base: "w-full h-12 sm:w-[60%]",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<MagnifyingGlassIcon className="w-8" />}
          type="search"
        />
      </NavbarContent>
      <NavbarContent
        as="div"
        className="flex items-center justify-between"
        justify="center"
      >
        <Badge content="5" color="danger" shape="rectangle">
          <Avatar
            isBordered
            icon={<UserPlusIcon />}
            size="sm"
            className="mr-1 bg-orange-200 text-black"
          />
        </Badge>
        <Badge content="10" color="danger" shape="rectangle">
          <Avatar
            isBordered
            icon={<BellAlertIcon />}
            size="sm"
            className="mr-1 bg-orange-200 text-black"
          />
        </Badge>
        <Menu>
          <MenuButton aria-label="Options" className="mr-2 mt-2">
            <Badge content="99+" color="danger" shape="rectangle">
              <Avatar
                isBordered
                as="button"
                icon={<ChatBubbleBottomCenterTextIcon />}
                size="sm"
                className="mr-1 bg-orange-200 text-black "
              />
            </Badge>
          </MenuButton>
          <MenuList className="w-[400px]">
            <MenuItem>New Tab</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File...</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton aria-label="Options">
            <Avatar
              isBordered
              as="button"
              className="mr-1 transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </MenuButton>
          <MenuList>
            <MenuItem className="flex h-14 flex-col items-start gap-1 rounded-md">
              <p className="text-sm font-semibold">Registrado como</p>
              <p className="text-sm font-semibold">zoey@example.com</p>
            </MenuItem>
            <MenuItem as="a" href="/perfil" className="rounded-md">
              Mi perfil
            </MenuItem>
            <MenuItem className="rounded-md">Ajustes</MenuItem>
            <MenuItem as="a" href="/" className=" rounded-md hover:bg-red-100">
              Cerrar Sesión
            </MenuItem>
          </MenuList>
        </Menu>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarEvents;
