
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMagicloginMutation } from '../../slices/userApiSlice';
import { setCredentials } from '../../slices/authSlice';

const MagicLoginCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [magiclogin] = useMagicloginMutation();

  const verifyToken = async (token) => {
    try {
      const res = await magiclogin({ token }).unwrap();
      dispatch(setCredentials({ ...res.user }));
      navigate('/');
    } catch (err) {
      console.log(err);
      // navigate('/login');
    }
  }

  useEffect(() => {
    const getTokenFromURL = () => {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get('token');
    };
  
    const token = getTokenFromURL();
    // console.log(token);
    // call api to verify token
    verifyToken(token);

    // if verified, dispatch action to set credentials
    // else redirect to login page
},[]);

  return (
    <div>
      <h1>Magic Login Successful!</h1>
      {userInfo && <h2>Welcome {userInfo.name}</h2>}
      {/* You can render a success message or redirect to another page */}
    </div>
  );
};

export default MagicLoginCallback;