import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  // The initial state when the project is opened
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()

  // If product is loading Then th load component will be displayed
  // else the loading component still loads :)
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Loading />
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </Wrapper>
  )
}
// My STYLING Using styled component module

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
`

export default FeaturedProducts
