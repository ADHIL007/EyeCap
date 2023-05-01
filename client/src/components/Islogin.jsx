import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const StyledLink = styled(Link)({
    textDecoration: 'none',
    background: 'rgba(0,0,0,0.0)'
  });
  
  const StyledButton = styled(Button)({
    textTransform: 'none',
    fontSize: '1.5rem',
    fontWeight: 400,
    color: '#f2f2f2',
 
  });
  
  
  function IsLogin() {
    const [isLogin, setIsLogin] = useState(true);
  
    const handleClick = () => {
      setIsLogin(!isLogin);
    };
  
    return (
      <div className='islogin'
      onClick={handleClick}>
     
        {isLogin ? (
          <StyledLink to='/login'>
            <StyledButton variant='text' startIcon={<LockOpenIcon />}>
              Login
            </StyledButton>
          </StyledLink>
        ) : (
          <StyledLink to='/signup'>
            <StyledButton variant='text' startIcon={<PersonAddIcon />}>
              Signup
            </StyledButton>
          </StyledLink>
        )}
      </div>
    );
  }
  
  export default IsLogin;