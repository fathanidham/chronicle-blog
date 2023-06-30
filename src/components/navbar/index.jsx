import { Flex, Spacer } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

function NavBar(funcSearch) {
  return (
    <Flex
      w={'full'}
      h={'5rem'}
      zIndex={2}
      px={'2rem'}
      position={'sticky'}
      top={'0px'}
      alignItems={'center'}
      color={"primaryTextIcon"}
      bgColor={"darkPrimary"}
      boxShadow={"xl"}
    >
      <NavLeft 
      mr={'10'}
      />
        <Spacer />
          <SearchBar mr={10} funcSearch={funcSearch}/>
        <Spacer />
        
      <NavRight />
    </Flex>
  );
}

export default NavBar;
