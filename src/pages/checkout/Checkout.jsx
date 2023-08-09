import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../ui/NavBar';
import Footer from '../../ui/Footer';
import { ButtonDefault } from '../../ui/Buttons';
import CustomInputFields from './CustomInputFields';
import { useState } from 'react';
import CheckoutConfirmationModal from '../../ui/CheckoutConfirmationModal';
import Overlay from '../../ui/Overlay';

const Checkout = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate()
    const cartItems=[
        {name: "XX99 MK II", quantity: 1, price: 100, image: "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"},
        {name: "XX59", quantity: 2, price: 100, image: "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"}, 
        {name: "YX1", quantity: 3, price: 100, image: "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"}
    ]
    const toggleCardOpen = () => {
        setModalOpen(prevState => !prevState)
        const elements = document.getElementById('overlay')
        if(elements !== null) {
            elements.classList.toggle("hidden")
        }
    }
    return(
        <div className='relative'>
            <Overlay/>
            <NavBar />
            {isModalOpen && <CheckoutConfirmationModal cartItems={cartItems} itemsNo={cartItems.length} grandTotal={0}/>}
            <div className='relative container w-screen'>
                <button 
                    onClick={() => {
                        navigate(-1)
                    }}
                    className="text-sm opacity-50 my-6"
                >
                    Go back
                </button>
                <div className='rounded-lg sm:p-6 bg-white lg:max-w-[45.6rem] lg:px-12 mb-24'>
                    <h1 className='text-heading-4 uppercase sm:text-heading-3 mb-8'>checkout</h1>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
        
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className='text-orange text-subtitile uppercase mb-4'>Billing Details</div>
                                <div className='flex flex-col w-full gap-y-6 sm:flex-row sm:flex-wrap justify-between mb-8 sm:mb-12'>
                                    <CustomInputFields
                                        type="name" 
                                        name="name"
                                        placeholder='Alexei Ward'
                                        required
                                    />
                                    <CustomInputFields
                                        type="email" 
                                        name="email" 
                                        placeholder="alexei@mail.com"
                                        required
                                    />
                                    <CustomInputFields
                                        type="phone" 
                                        name="phone"
                                        label="phone number" 
                                        placeholder="+1(202)555-0136"
                                        required
                                    />
                                </div>
                                <div className='text-orange text-subtitile uppercase mb-4'>Shipping info</div>
                                <div className='flex flex-col w-full gap-y-6 sm:flex-row sm:flex-wrap justify-between mb-8 sm:mb-12'>
                                    <CustomInputFields
                                        type="text" 
                                        name="address"
                                        label="Your Address" 
                                        placeholder="1137 Williams Avenue"
                                        required
                                    />
                                    <CustomInputFields
                                        // type="number"
                                        type="text" 
                                        pattern="[0-9]*" 
                                        name="ziocode"
                                        label="zip code" 
                                        placeholder="10001"
                                        required
                                    />
                                    <CustomInputFields
                                        type="text" 
                                        name="city"
                                        placeholder="new york"
                                        required
                                    />
                                    <CustomInputFields
                                        type="text" 
                                        name="country"
                                        placeholder="United States"
                                        required
                                    />
                                </div>
                                
                                <div className='text-orange text-subtitile uppercase mb-4'>payment details</div>
                                {/* peer is nested to deep => doesn;t have effect */}
                                <fieldset 
                                    role="group" 
                                    aria-labelledby="my-radio-group"
                                    required
                                    className='flex flex-col w-full gap-y-6 sm:flex-row sm:flex-wrap justify-between'>
                                    <label className='text-sm font-bold capitalize w-full'>Payment Method</label>
                                    <CustomInputFields
                                        type="radio"
                                        name="payment"
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
                                        name="payment"
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
                                                lg:absolute top-16 right-0 lg:w-[21.8rem] lg:px-8 max-w-lg m-auto">
                                    <div className="text-heading-6 uppercase">
                                        summary
                                    </div>
                                    <ul className='flex flex-col'>
                                        {cartItems.map(item => (
                                            <li key={item.name} className="flex justify-between items-center mb-8">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className='w-16 h-16 rounded-lg'
                                                />
                                                <div className='flex flex-col items-start flex-1 ml-6'>
                                                    <div className='text-p font-bold uppercase'>{item.name}</div>
                                                    <div className='text-button opacity-50'>${item.price}</div>
                                                </div>
                                                <div className='text-p font-bold opacity-50'>x{item.quantity}</div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="text-p uppercase opacity-50">Total</div>
                                            <div className="text-heading-6">$0</div>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="text-p uppercase opacity-50">shipping</div>
                                            <div className="text-heading-6">$0</div>
                                        </div>
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="text-p uppercase opacity-50">vat(included)</div>
                                            <div className="text-heading-6">$0</div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-p uppercase opacity-50">grand total</div>
                                            <div className="text-heading-6 text-orange">$0</div>
                                        </div>
                                    </div>
                                    <ButtonDefault
                                        type="submit" 
                                        disabled={isSubmitting}
                                        content="continue & pay"
                                        className="bg-orange hover:bg-orange-lighter w-full"
                                        handleClick={()=>toggleCardOpen()}
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <Footer/>
        </div>
    );
}




export default Checkout;
