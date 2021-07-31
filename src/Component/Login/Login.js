import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <LogoContained>
            <loginContaineds>
                <Logo>
                    LOGO
                </Logo>
                <estimContain>
                    Estimated Allocations
                </estimContain>
                <signInText>
                    Sign-In
                </signInText>
                <signInLogos>

                </signInLogos>
            </loginContaineds>
        </LogoContained>
    )
}

export default Login


const LogoContained = styled.div`
width: 90vw;
display: flex;
justify-content: center;
`
const loginContaineds = styled.div`
width: 320px;
background-color: black;
height: 500px;
`

const Logo = styled.div`
`
const estimContain = styled.div``

const signInText = styled.div``

const signInLogos = styled.div``

