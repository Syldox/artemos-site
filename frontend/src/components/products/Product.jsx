import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
	return (
		<>
			<Card className='my-3 p-3 rounded '>
				<Link to={`/product/${product._id}`}>
					<Card.Img src={product.image} variant='top' />
				</Link>
				<Card.Body>
					<Link to={`/product${product._id}`}>
						<Card.Title as='div'>
							{' '}
							<strong>{product.name}</strong>
						</Card.Title>
					</Link>
					<Card.Text as='div'>
						<div className='my-3'>
							{product.rating} from {product.numReviews} Reviews
						</div>
					</Card.Text>
					<Card.Text as='div'>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</Card.Text>
					<Card.Text as='h5' style={{ color: '#B12704' }}>
						$ {product.price}{' '}
					</Card.Text>
				</Card.Body>
				<Button variant='primary' className='button-color m-2' size='sm'>
					Add to cart <i className='fas fa-plus'></i>
				</Button>{' '}
			</Card>
		</>
	)
}

export default Product
