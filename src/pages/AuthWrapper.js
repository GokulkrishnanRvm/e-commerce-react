import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const AuthWrapper = ({children}) => {
  const {isLoading,error} = useAuth0();
  if(isLoading){
    return (
    <Wrapper>
      <div className="center">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      </div>
    </Wrapper>)
  }
  if(error){
    return (
    <Wrapper>
      <h1>Oops...</h1>
      <h3>{error.message}</h3>
    </Wrapper>)
  }
  return <>{children}</>

}

const Wrapper = styled.section`
   margin: 0;
   padding: 0;
   box-sizing: border-box;
.center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcfefe;
}
.wave {
  width: 5px;
  height: 100px;
  background: linear-gradient(45deg, #142d4c, #385170);
  margin: 10px;
  animation: wave 1s linear infinite;
  border-radius: 20px;
}
.wave:nth-child(2) {
  animation-delay: 0.1s;
}
.wave:nth-child(3) {
  animation-delay: 0.2s;
}
.wave:nth-child(4) {
  animation-delay: 0.3s;
}
.wave:nth-child(5) {
  animation-delay: 0.4s;
}
.wave:nth-child(6) {
  animation-delay: 0.5s;
}
.wave:nth-child(7) {
  animation-delay: 0.6s;
}
.wave:nth-child(8) {
  animation-delay: 0.7s;
}
.wave:nth-child(9) {
  animation-delay: 0.8s;
}
.wave:nth-child(10) {
  animation-delay: 0.9s;
}

@keyframes wave {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
`

export default AuthWrapper
