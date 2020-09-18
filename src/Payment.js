import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'

function Payment() {

    const [{ user, basket }, dispatch] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState(null)
    const [disable, setDisabled] = useState(true)

    const handleSubmit = e => {

    }

    const handleChange = event => {
        // listen for change as customer types in card details and display any errors

        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                {/*payment section delivery address*/}
                <div className="payment__section">

                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>React Amz, RA</p>
                    </div>

                </div>

                {/*payment section review items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/*payment section payment methods*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe stuff*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">

                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
