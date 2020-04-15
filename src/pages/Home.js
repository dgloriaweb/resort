import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title='Luxurious Rooms'
          subtitle='deluxe rooms starting at £400'
        >
          <Link to='/rooms' className='btn-primary'>
            Rooms
          </Link>
        </Banner>
      </Hero>

      <Services />
      <FeaturedRooms >
        
      </FeaturedRooms>
    </>
  )
}
