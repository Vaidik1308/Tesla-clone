import React,{useState} from 'react'
import styled from 'styled-components';
import logo from './images/logo.svg';
import {FaBars,FaTimes} from 'react-icons/fa';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';




function Header() {

  const [burgerStatus, setBurgerStatus] = useState(true);
  const cars = useSelector(selectCars); 
  console.log(cars); 
  // function closeNav(){
  //   setBurgerStatus = !setBurgerStatus;
  // }


  return (
    <Container>
      <a>
        <img src={logo} />
      </a>
      <Menu>
        {cars && cars.map((car,index) => (
          <a key={index} href='#'>{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => {
          setBurgerStatus(false);
        }}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => {
            setBurgerStatus(true)
          }}/>
        </CloseWrapper>
        {cars && cars.map((car,index)=>(
          <li><a key={index} href="#" >{car}</a></li>
        ))}
        <li><a href="#" >Used Inventory</a></li>
        <li><a href="#" >Trade-in</a></li>
        <li><a href="#" >Cybertruck </a></li>
        <li><a href="#" >Roadastor </a></li>
      </BurgerNav>
    </Container>
   
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;  // for fixed position
  display: flex;
  align-items: center;  //align vertically
  justify-content: space-between;
  padding: 0 20px;
  width:100vw;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap
  }

  @media(max-width: 768px){
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(FaBars)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 40%;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li{
    padding: 15px ;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
      font-weight: 600;
    };
  }
  transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0%)'};
  transition: transform 0.2s;
  @media(min-width: 1200px){
    width:20%;
  }

`;


const CustomClose = styled(FaTimes)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;