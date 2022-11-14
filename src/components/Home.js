import React from 'react';
import styled from 'styled-components';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';
import Section7 from './sections/Section7';



function Home() {
 
  return (
    <Container>
        {/* Home Component */}
        <Section1
          title="Model S" 
          description="Order Online For Touchless Delivery"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section2 
          title="Model 3" 
          description="Order Online For Touchless Delivery"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />

        <Section3
          title="Model X" 
          description="Order Online For Touchless Delivery"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        /> 

        <Section4 
          title="Model Y" 
          description="Order Online For Touchless Delivery"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
      
        <Section5
          title="Lowest Cost Solar Panels in America" 
          description="Money back guarantee"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        /> 

        <Section6
          title="Solar for New Roofs" 
          description="Solar roofs Costs Less Than a New Roof Plus Panels"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        /> 

        <Section7
          title="Accessories" 
          description=""
          leftBtnText="Shop now"
      
        /> 
      
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`