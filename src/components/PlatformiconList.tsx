import { Platform } from "../hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"
import { FaWindows, FaPlaystation,FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { MdPhone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from "react-icons"

interface Props{
    platforms: Platform[]
}

const PlatformiconList = ({platforms} : Props) => {

    const iconMap : {[key: string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        linux: FaLinux,
        ios: MdPhone,
        web: BsGlobe,
        mac: FaApple,
        android: FaAndroid
    }

  return (
    <HStack marginY={1} >
    {platforms.map((platform) => (<Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />))}
    </HStack>
  )
}

export default PlatformiconList