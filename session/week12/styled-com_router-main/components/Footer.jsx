import styled from "styled-components";

const Box = styled.div`
    width: 100vw;
    height: 100px;
    border: 3px solid blue;
`

function Footer(){
    return(
        <Box>
            Footer입니다.
        </Box>
    )
}

export default Footer;