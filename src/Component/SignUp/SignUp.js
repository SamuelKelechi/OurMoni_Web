import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function SignUp() {
  return (
    <SignUpContainer>
      <SignUpWrapper>
        <LeftCard>
          <LogoHolder>Logo</LogoHolder>
          <LeftContentHolder>
            <AjHolder>Ajegunle Revenue Generation</AjHolder>
            <EstiHolder>Estimated Allocations</EstiHolder>
            <AmountHolder>Amount Resource Distributed</AmountHolder>
          </LeftContentHolder>
          <emptyContainer></emptyContainer>
        </LeftCard>
        <RightCard>
          <RightContentHolder>
            <SingUpText>Sign-UP</SingUpText>
            <SignUpLogos>
              <TwitterLogo>T</TwitterLogo>
              <FacebookLogo>F</FacebookLogo>
              <GoogleLogo>G</GoogleLogo>
            </SignUpLogos>
            <TextContain>or use your Email Account</TextContain>
            <InputContainer>
              <input placeholder="Full Name"/>
              <input placeholder="Email"/>
              <input placeholder="Password"/>
            </InputContainer>

            <Button type="primary">Sign-Up</Button>
            <TextContainer>
              <DontContain>Already have an account?</DontContain>
              <Link to="/login"><JoinContain>Login</JoinContain></Link>
            </TextContainer>
          </RightContentHolder>
        </RightCard>
      </SignUpWrapper>
    </SignUpContainer>
  )
}

export default SignUp

const SignUpContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`
const SignUpWrapper = styled.div`
width: 80vw;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
@media screen and (max-width: 1400px){
  justify-content: center;
}
@media screen and (max-width: 650px){
  width: 95vw;
}
`
const LeftCard = styled.div`
width: 550px;
background-color: black;
height: 700px;
display: flex;
flex-direction: column;
align-items: center;
color: white;
margin: 10px;
@media screen and (max-width: 650px){
 height: 500px
}
`
const RightCard = styled.div`
width: 550px;
display: flex;
height: 700px;
justify-content:center;
align-items: center;
margin: 10px;
@media screen and (max-width: 1025px){
  align-items: flex-start
}
@media screen and (max-width: 1025px){
  height: 550px
 }
`
const LogoHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
height: 100px;
width: 100px;
border-radius: 100%;
background-color: White;
color: black;
font-size: 25px;
font-weight:  bolder;
 
  @media screen and (max-width: 650px){
    height: 80px;
    width: 80px;
  }
  @media screen and (max-width: 350px){
    height: 70px;
    width: 70px;
  }

`
const LeftContentHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-top: 130px;
height: 200px;
@media screen and (max-width: 450px){
  margin-top: 80px;
}
`
const emptyContainer = styled.div``

const AjHolder = styled.div`
font-weight: bold;
font-size: 20px;
height: 29px;
border-bottom: 3px solid grey;
@media screen and (max-width: 350px){
  width: 100%;
  font-size: 16px;
}
`
const EstiHolder = styled.div`
font-weight: bold;
font-size: 20px;
height: 29px;
border-bottom: 3px solid grey;
@media screen and (max-width: 350px){
  width: 100%;
  font-size: 16px;
}
`
const AmountHolder = styled.div`
font-weight: bold;
font-size: 20px;
height: 29px;
border-bottom: 3px solid grey;
@media screen and (max-width: 350px){
  width: 100%;
  font-size: 16px;
}
`
const RightContentHolder = styled.div`
height: 550px;
width: 350px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 650px){
  width: 95%;
}
  >button {
    width: 120px;
    height: 40px;
    border-radius: 8px;
  }

`
const SingUpText = styled.div`
font-weight: bolder;
font-size: 30px;
@media screen and (max-width: 650px){
  font-size: 25px;
}
`
const SignUpLogos = styled.div`
display: flex;
width: 60%;
height: 100px;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 650px){
  width: 60%;
}
`
const TwitterLogo = styled.div`
height: 60px;
width: 60px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid grey;
cursor: pointer;

@media screen and (max-width: 650px){
  height: 50px;
  width: 50px;
}
`
const FacebookLogo = styled.div`
height: 60px;
width: 60px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid grey;
cursor: pointer;

@media screen and (max-width: 650px){
  height: 50px;
  width: 50px;
}
`
const GoogleLogo = styled.div`
height: 60px;
width: 60px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid grey;
cursor: pointer;

@media screen and (max-width: 650px){
  height: 50px;
  width: 50px;
}
`
const TextContain = styled.div`
font-weight: bold;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 270px;
  width: 90%;
  margin-top: 15px;
  @media screen and (max-width: 1025px){
    width: 100%;
    height: 250px;
    align-items: center;
  }
  @media screen and (max-width: 650px){
    width: 100%;
    height: 200px;
    align-items: center;
  }

  >input{
    height: 50px;
    border-radius: 8px;
    border: 1px solid darkgrey;
    padding-left: 20px;
    width: 100%;

    @media screen and (max-width: 650px){
      width: 90%;
      height: 40px;
    }
`
const TextContainer = styled.div`
display: flex;
height: 60px;
justify-content: space-between;
align-items: center;
width: 196px
`
const DontContain = styled.div`
`
const JoinContain = styled.div`
color: rgb(27,146,255);
cursor: pointer;
`