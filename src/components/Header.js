import React from 'react';
import clientLogo from '../parkrun.png'
import styled from 'styled-components';

const Nav = styled.div`
    background: #28203A;
    height: 80px;
    display: flex;
    align-items: center;
    width: 100vw;
`;

const Logo = styled.div`
    justify-content: flex-start;
    margin-left: 10px
`;

const TitleBar = styled.div`
  margin-left: 1.5rem;
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
`;

const Header = () => {
    return(
        <>
            <Nav>
                <Logo>
                    <img src={clientLogo} alt="Parkrun" height={65} />
                    </Logo>
                <TitleBar>
                    <div>
                        <div className="card-title">A Bunch of Stats!</div>
                        <div className="card-subtitle" style={{paddingTop: "0px", fontSize:"0.8rem"}}> Unofficial Dunedin Parkrun Data</div>
                    </div>
                </TitleBar>
            </Nav>
        </>
    )

}

export default Header;
