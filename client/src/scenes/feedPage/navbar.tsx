import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import {
  MagnifyingGlassIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterTextIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Img } from "@chakra-ui/react";

type Props = {};

function NavbarEvents({}: Props) {
  return (
    <Navbar className="bg-gray-20 py-1 drop-shadow" isBordered maxWidth="xl">
      <NavbarContent justify="center">
        <NavbarBrand>
          <img alt="logo" src={Logo} className=" w-32" />
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
        <Avatar
          isBordered
          icon={<UserPlusIcon />}
          size="sm"
          className="mr-1 bg-orange-200 text-black"
        />
        <Avatar
          isBordered
          icon={<BellAlertIcon />}
          size="sm"
          className="mr-1 bg-orange-200 text-black"
        />
        <Avatar
          isBordered
          icon={<ChatBubbleBottomCenterTextIcon />}
          size="sm"
          className="mr-1 bg-orange-200 text-black"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="mr-1 transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings" href="/perfil">
              Mi Perfil
            </DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarEvents;
