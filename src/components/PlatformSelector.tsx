import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/useGames'

interface Props{
  onSelectPlatform: (platform : Platform) => void;
}

const PlatformSelector = ({onSelectPlatform} : Props) => {

    const {data, error} = usePlatform();

    if(error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} >Platforms</MenuButton>
        <MenuList>
            { data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} >{platform.name}</MenuItem>)}
            

        </MenuList>
    </Menu>
  )
}

export default PlatformSelector