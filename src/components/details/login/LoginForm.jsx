import { FiUnlock, FiUser } from 'react-icons/fi';
import CustomInputForm from '../forgotForm/CustomInputForm';
import { useState } from 'react';

function LoginForm() {

  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <CustomInputForm
        id="username"
        type="text"
        placeholder="Username/Email/Phone Number"
        icon={<FiUser />}
      />
      <CustomInputForm
        id="password"
        type="password"
        placeholder="Password"
        pass={showPass}
        onPass={() => setShowPass(!showPass)}
        icon={<FiUnlock />}
      />
    </>
  );
}

export default LoginForm;
