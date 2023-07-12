import styled from "styled-components";
import {Link} from "react-router-dom";

const Box = styled.header`
    width: 100vw;
    height: 100px;
    border: 3px solid red;
`

function Header(){
    return(
        <Box>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
        </Box>
    )
}

export default Header;