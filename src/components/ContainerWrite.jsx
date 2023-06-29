import { Box } from '@chakra-ui/react';
import WriteForm from './details/writeForm/WriteForm';

function ContainerWrite() {
  return (
    <Box
      bgColor={'sidebar'}
      w={'90%'}
      maxW={"65rem"}
      h={"full"}
      mx={'auto'}
      px={12}
      py={8}
      boxShadow={"dark-lg"}
    >
        <WriteForm />
    </Box>
  );
}

export default ContainerWrite;
