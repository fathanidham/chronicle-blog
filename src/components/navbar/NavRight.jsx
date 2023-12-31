import { Flex } from '@chakra-ui/react';
import { RiNotificationLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import WriteButton from '../details/writeForm/WriteButton';
import LoginButton from '../details/login/LoginButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserDropdown from '../details/profiling/UserDropdown';


function NavRight() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();

  function toBoookmark(){
    navigate('/bookmark')
  }

  if (isLogin)
    return (
      <Flex direction={'row'} alignItems={'center'} gap={3}>
        <WriteButton />
        <BsBookmark color={"primaryTextIcon"} size={'1.4rem'} cursor={'pointer'} onClick={toBoookmark} />
        {/* <RiNotificationLine color={"primaryTextIcon"} size={'1.4rem'} /> */}
        <UserDropdown />
      </Flex>
    );

  return (
    <Flex direction={'row'} alignItems={'center'} gap={2}>
      <WriteButton isWrite={true}/>
      <LoginButton />
    </Flex>
  );
}

export default NavRight;