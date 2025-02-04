import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/react.svg'
import ColorModeSwitch from "./ColorModeSwitch"


const NavBar = () => {
  return (
    <div>
        <HStack justifyContent='space-between' padding='15px' >
            <Image src={logo} />
            <Text color="green" >Navbar</Text>
            <ColorModeSwitch />
        </HStack>
    </div>
  )
}

export default NavBar