import React from 'react'
import styled from 'styled-components'
import { services } from '../context/constants'

const Services = () => {
  return <Wrapper>
    <div className='section-center'>
      <article className='header'>
        <h3>
          custom furniture<br />
          built only for you
        </h3>
        <p>
          Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
        </p>
      </article>
      <div className='services-center'>
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className='service'>
              <span className='icon'>{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </div>
  </Wrapper>
}
// My STYLING Using styled component module

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
    .section-center {
      transform: translateY(5rem);
    }
`
export default Services
