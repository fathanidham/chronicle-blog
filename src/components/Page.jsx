import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from 'react-icons/bi';

function Page({ page, changePage }) {
  return (
    <Flex gap={1}alignSelf={'center'}>
      <Box
        bgColor={'#ffffff88'}
        borderRadius={'50%'}
        cursor={'pointer'}
        onClick={() => changePage(1)}
        _hover={{
          bgColor: '#ffffff44',
        }}
      >
        <BiChevronsLeft fontSize={'4vh'} />
      </Box>

      {page.current > 1 && (
        <Box
          bgColor={'#ffffff88'}
          borderRadius={'50%'}
          cursor={'pointer'}
          onClick={() => changePage(page.current - 1)}
          _hover={{
            bgColor: '#ffffff44',
          }}
        >
          <BiChevronLeft fontSize={'4vh'} />
        </Box>
      )}

      <Spacer />
      <Spacer />

      {page.current - 1 > 0 && (
        <Flex
          w={'fit-content'}
          minW={'4vh'}
          h={'4vh'}
          p={2}
          bgColor={'#ffffff88'}
          borderRadius={'1rem'}
          cursor={'pointer'}
          alignItems={'center'}
          justifyContent={'center'}
          onClick={() => changePage(page.current - 1)}
          _hover={{
            bgColor: '#ffffff44',
          }}
        >
          <Text
            color={'primaryText'}
            fontFamily={'Oswald'}
            fontSize={'s'}
            fontWeight={'semibold'}
          >
            {page.current - 1}
          </Text>
        </Flex>
      )}

      <Flex
        w={'fit-content'}
        minW={'4vh'}
          h={'4vh'}
        p={2}
        bgColor={'accent'}
        borderRadius={'1rem'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text
          color={'primaryTextIcon'}
          fontFamily={'Oswald'}
          fontSize={'s'}
          fontWeight={'semibold'}
        >
          {page.current}
        </Text>
      </Flex>

      {page.current + 1 <= page.last && (
        <Flex
          w={'fit-content'}
          minW={'4vh'}
          h={'4vh'}
          p={2}
          bgColor={'#ffffff88'}
          borderRadius={'1rem'}
          cursor={'pointer'}
          alignItems={'center'}
          justifyContent={'center'}
          onClick={() => changePage(page.current + 1)}
          _hover={{
            bgColor: '#ffffff44',
          }}
        >
          <Text
            color={'primaryText'}
            fontFamily={'Oswald'}
            fontSize={'s'}
            fontWeight={'semibold'}
          >
            {page.current + 1}
          </Text>
        </Flex>
      )}

      <Spacer />
      
      
      {page.current < page.last && (
        <Box
          bgColor={'#ffffff88'}
          borderRadius={'50%'}
          cursor={'pointer'}
          onClick={() => changePage(page.current + 1)}
          _hover={{
            bgColor: '#ffffff44',
          }}
        >
          <BiChevronRight fontSize={'4vh'} />
        </Box>
      )}

      <Box
        bgColor={'#ffffff88'}
        borderRadius={'50%'}
        cursor={'pointer'}
        onClick={() => changePage(page.last)}
        _hover={{
          bgColor: '#ffffff44',
        }}
      >
        <BiChevronsRight fontSize={'4vh'} />
      </Box>
    </Flex>
  );
}

export default Page;