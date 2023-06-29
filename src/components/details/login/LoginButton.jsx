import { Button, useDisclosure } from '@chakra-ui/react';
import ModalLogin from './ModalLogin';

function LoginButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant={'solid'}
      color={"primaryTextIcon"} 
      bgColor={"accent"}
      _hover={{bgColor: "accentSecondary"}}
      onClick={onOpen}>
        Sign In
      </Button>
      <ModalLogin isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default LoginButton;
