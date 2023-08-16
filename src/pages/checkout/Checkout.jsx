import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../ui/NavBar';
import Footer from '../../ui/Footer';
//import { ButtonDefault } from '../../ui/Buttons';
import CustomInputFields from './CustomInputFields';
import { useState } from 'react';
import CheckoutConfirmationModal from '../../ui/CheckoutConfirmationModal';
import Overlay from '../../ui/Overlay';
import CartItem from '../../components/cart/CartItem';
import * as Yup from 'yup';
import { addClientToDb } from '../../services/apiClients';
import { addOrderToDb } from '../../services/apiOrders';
import Error from '../../ui/Error';
import Loader from '../../ui/Loader';
import { useSelector } from 'react-redux';
import { getCart, getTotalCartPrice, shippingFee, vatPercentage } from '../../redux/cartSlice';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required').required('Required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    zipcode:Yup.string().required().matches(/^[0-9]+$/, "Must be only digits").test('len', 'Must be exactly 5 characters', val => val.length === 5),
    city: Yup.string().required('Required'),
    country:Yup.string().required('Required'),

});

const Checkout = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [error, setError] = useState(null)
    const [orderId, setOrderId] = useState(null)
    const navigate = useNavigate()
    const cartItems = useSelector(getCart)
    const totalPrice = useSelector(getTotalCartPrice)
    const vatValue = Math.round(totalPrice * vatPercentage)
    const grandTotal = totalPrice + shippingFee
    
    const initialValues={ 
        name: '',
        email: '', 
        phoneNumber: '',
        address:'',
        zipcode:'',
        city:'',
        country:'',
        paymentType:'',
        emoneyNumber:'',
        emoneyPin:'',
    }

    const toggleCardOpen = () => {
        setModalOpen(prevState => !prevState)
        const elements = document.getElementById('overlay')
        if(elements !== null) {
            elements.classList.toggle("hidden")
        }
    }
    const handleOnSubmit = async (values, { setSubmitting }) => {
        const [clientData, orderData] = prepareDataForPostRequest(values)
        const [dataClient,errorClient]  = await addClientToDb([clientData])
        if(errorClient) {
            console.log(errorClient)
            setError(errorClient)
        } else {
            const clientId = dataClient[0].id
            const [dataOrder, errorOrder] = await addOrderToDb([{...orderData, clientId}])
            if (errorOrder) {
                setError(errorOrder)
            }else if(dataOrder[0].id) {
                setOrderId(dataOrder[0].id)
                toggleCardOpen()
            }
        }
    }
    const prepareDataForPostRequest = (values) => {
        const {name, email, phoneNumber, address, zipcode, city, country, paymentType} = values
        const clientData = {name,email,phoneNumber,address,zipcode,city,country}
        const orderData = {paymentType,shippingFee,vatValue,grandTotal}
        return [clientData, orderData]
    }

    return(
        <div className='relative'>
            <Overlay/>
            <NavBar />
            {error && <Error error={error.data || error.message}/>}
            {isModalOpen && <CheckoutConfirmationModal cartItems={cartItems} itemsNo={cartItems.length} grandTotal={grandTotal} orderId={orderId}/>}
            {!error && <div className='relative container w-screen'>
                <button 
                    onClick={() => {
                        navigate(-1)
                    }}
                    className="text-sm opacity-50 my-6"
                >
                    Go back
                </button>
                <div className='rounded-lg p-6 bg-white lg:max-w-[42.6rem] lg:p-12 mb-24'>
                    <h1 className='text-heading-4 uppercase sm:text-heading-3 mb-8'>checkout</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit = {handleOnSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className='text-orange text-subtitile uppercase mb-4'>Billing Details</div>
                                <div className='flex flex-col w-full gap-y-6 sm:flex-row sm:flex-wrap justify-between mb-8 sm:mb-12'>
                                    <CustomInputFields
                                        type="name" 
                                        name="name"
                                        placeholder='Alexei Ward'

                                    />
                                    <CustomInputFields
                                        type="email" 
                                        name="email" 
                                        placeholder="alexei@mail.com"

                                    />
                                    <CustomInputFields
                                        type="phone" 
                                        name="phoneNumber"
                                        label="phone number" 
                                        placeholder="+1(202)555-0136"

                                    />
                                </div>
                                <div className='text-orange text-subtitile uppercase mb-4'>Shipping info</div>
                                <div className='flex flex-col w-full gap-y-6 sm:flex-row sm:flex-wrap justify-between mb-8 sm:mb-12'>
                                    <CustomInputFields
                                        type="text" 
                                        name="address"
                                        label="Your Address" 
                                        placeholder="1137 Williams Avenue"

                                    />
                                    <CustomInputFields
                                        // type="number"
                                        type="text" 
                                        pattern="[0-9]*" 
                                        name="zipcode"
                                        label="zip code" 
                                        placeholder="10001"

                                    />
                                    <CustomInputFields
                                        type="text" 
                                        name="city"
                                        placeholder="new york"

                                    />
                                    <CustomInputFields
                                        type="text" 
                                        name="country"
                                        placeholder="United States"

                                    />
                                </div>
                                
                                <div className='text-orange text-subtitile uppercase mb-4'>payment details</div>
                                {/* peer is nested to deep => doesn;t have effect */}
                                <fieldset 
                                    role="group" 
                                    aria-labelledby="my-radio-group"
                                    className='flex flex-col w-full gap-y-6 sm:flex-row sm:flex-wrap justify-between'>
                                    <label className='text-sm font-bold capitalize w-full'>Payment Method</label>
                                    <CustomInputFields
                                        type="radio"
                                        name="paymentType"
                                        value="e-money"
                                        id="e-money"
                                        className="inline-block mr-4 peer"
                                        label="e-Money"
                                        onClick={() => {
                                            document.getElementById('e-money-payment-details').classList.remove('hidden')
                                            document.getElementById('e-money-outer').classList.add('border-orange')
                                            document.getElementById('cash-on-delivery-outer').classList.remove('border-orange')
                                            document.getElementById('cash-on-delivery-details').classList.add('hidden')
                                        }}
                                    />
                                    <CustomInputFields
                                        type="radio"
                                        name="paymentType"
                                        value="cash on delivery"
                                        id="cash-on-delivery"
                                        className="inline-block mr-4"
                                        label="Cash on Delivery"
                                        onClick={() => {
                                            document.getElementById('e-money-payment-details').classList.add('hidden')
                                            document.getElementById('e-money-outer').classList.remove('border-orange')
                                            document.getElementById('cash-on-delivery-outer').classList.add('border-orange')
                                            document.getElementById('cash-on-delivery-details').classList.remove('hidden')
                                        }}
                                    />
                                    <div 
                                        id='e-money-payment-details'
                                        className='flex flex-col gap-y-6 hidden sm:flex-row sm:flex-wrap justify-between mb-8 sm:mb-12 w-full'
                                    >
                                        <CustomInputFields
                                            // type="number" 
                                            type="text" 
                                            pattern="[0-9]*"
                                            name="emoneyNumber"
                                            label="e-Money Number" 
                                            placeholder="238521993"
                                        />
                                        <CustomInputFields
                                            // type="number"
                                            type="text" 
                                            pattern="[0-9]*"
                                            name="emoneyPin"
                                            label="e-Money PIN" 
                                            placeholder="6891"
                                        />
                                    </div>
                                    <div
                                        id="cash-on-delivery-details"
                                        className='flex gap-6 items-center hidden'
                                    >
                                        <img
                                            src='/assets/checkout/icon-cash-on-delivery.svg'
                                            alt='icon cash on delivery'
                                            className='fill-orange w-[3rem] h-[3rem] shrink-0'
                                        />
                                        <div className='text-xs opacity-50 sm:text-sm'>
                                            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="bg-white rounded-lg w-full text-black py-8
                                                flex flex-col gap-6
                                                lg:absolute top-16 right-0 max-w-[21.8rem] lg:px-8 m-auto">
                                    <div className="text-heading-6 uppercase">
                                        summary
                                    </div>
                                    <ul className='flex flex-col'>
                                        {cartItems.map(item => (
                                            <CartItem key={item.name} item={item}/>
                                        ))}
                                    </ul>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="text-p uppercase opacity-50">Total</div>
                                            <div className="text-heading-6">${totalPrice}</div>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="text-p uppercase opacity-50">shipping</div>
                                            <div className="text-heading-6">${shippingFee}</div>
                                        </div>
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="text-p uppercase opacity-50">vat(included)</div>
                                            <div className="text-heading-6">${vatValue}</div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-p uppercase opacity-50">grand total</div>
                                            <div className="text-heading-6 text-orange">${grandTotal}</div>
                                        </div>
                                    </div>
                                    {/* <ButtonDefault
                                        type="submit" 
                                        disabled={isSubmitting}
                                        content="continue & pay"
                                        className="bg-orange hover:bg-orange-lighter w-full"
                                        handleClick={()=>toggleCardOpen()}
                                    /> */}
                                    <button
                                        type='submit'
                                        disabled={isSubmitting}
                                        className="bg-orange hover:bg-orange-lighter w-full py-4 px-8 cursor-pointer color-transition-effect text-button uppercase text-white text-center disabled:bg-orange-lighter"
                                        // onClick={()=>toggleCardOpen()}
                                    >
                                        {isSubmitting ? <Loader/>:'Continue & pay'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>}
            <Footer/>
        </div>
    );
}




export default Checkout;
