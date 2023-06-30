import { Text, Flex } from '@chakra-ui/react';
import { GrCloud } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import c from '../assets/c.png'

function NavLeft() {
  const navigate = useNavigate();

  return (
    <Flex
      gap={2}
      alignItems={'center'}
      cursor={'pointer'}
      onClick={() => navigate('/')}
    >
      {/* <Link to={"/"}>
                <Image
                  src={c}
                  h={"32px"}
                  _hover={{ filter: "brightness(150%)", transition: "300ms" }}
                ></Image>
              </Link> */}
      <GrCloud size={'2rem'} />
      <Text
        fontFamily={'Fira Code'}
        color={'primaryTextIcon'}
        fontSize={'xl'}
        fontWeight={'semibold'}
      >
        <span style={{color: '#9DB2BF'}}>Chronicle</span>   
      </Text>
    </Flex>
  );
}

export default NavLeft;
