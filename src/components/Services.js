import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto aperiam dolorum id',
      },
      {
        icon: <FaHiking />,
        title: 'hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto aperiam dolorum id',
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle van',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto aperiam dolorum id',
      },
      {
        icon: <FaBeer />,
        title: 'pubs',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto aperiam dolorum id',
      },
    ],
  }
  render() {
    return (
      <section className='services'>
        <Title title='Services' />
        <div className="services-center">
            {this.state.services.map((item, index) =>{
                return <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    )
  }
}
