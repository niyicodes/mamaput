import React from 'react'
import HorizontalCard from '../../Components/Card/HorizontalCard/HorizontalCard'
import VerticalCard from '../../Components/Card/VerticalCard/VerticalCard'
import Navbar from '../../Components/InnerNavbar/Navbar'

const Orders = () => {
 return (
  <div>
   <Navbar />
   <VerticalCard />
   <HorizontalCard />
  </div>
 )
}

export default Orders