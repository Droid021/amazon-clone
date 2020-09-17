import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'

function Payment() {

    const [{ user, basket }, dispatch] = useStateValue()

    return (
        <div className='payment'>


            <div className="payment__container">

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
                    
                </div>

                {/*payment section payment methods*/}
                <div className="payment__section">

                </div>


            </div>
        </div>
    )
}

export default Payment
