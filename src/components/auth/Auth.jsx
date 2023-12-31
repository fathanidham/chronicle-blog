import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { keepLogin } from "../../reducer/AuthReducer";

function Auth({children}){
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(keepLogin());
    }, [dispatch]);

    return <>
        {children}
    </>
}

export default Auth;