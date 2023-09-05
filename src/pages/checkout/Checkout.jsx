import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import {
    selectCart,
    selectTotalCartPrice,
    shippingFee,
    vatPercentage,
} from '../../redux/cartSlice';
import { addClientToDb } from '../../services/apiClients';
import { addOrderToDb } from '../../services/apiOrders';

import NavBar from '../../ui/NavBar';
import Footer from '../../ui/Footer';
import Overlay from '../../ui/Overlay';
import Error from '../../ui/Error';
import Loader from '../../ui/Loader';
import CheckoutConfirmationModal from '../../ui/CheckoutConfirmationModal';
import CustomInputFields from './CustomInputFields';
import CartItem from '../../components/cart/CartItem';

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required')
        .required('Required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    address: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    zipcode: Yup.string()
        .required()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .test('len', 'Must be exactly 5 characters', (val) => val.length === 5),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
});

const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
    paymentType: '',
    emoneyNumber: '',
    emoneyPin: '',
};

const Checkout = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();
    const cartItems = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalCartPrice);
    const vatValue = Math.round(totalPrice * vatPercentage);
    const grandTotal = totalPrice + shippingFee;

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };
    const toggleCardOpen = () => {
        setModalOpen((prevState) => !prevState);
        const elements = document.getElementById('overlay');
        if (elements !== null) {
            elements.classList.toggle('hidden');
        }
    };
    const handleOnSubmit = async (values, { setSubmitting }) => {
        const [clientData, orderData] = prepareDataForPostRequest(values);
        const [dataClient, errorClient] = await addClientToDb([clientData]);
        if (errorClient) {
            setError(errorClient);
        } else {
            const clientId = dataClient[0].id;
            const [dataOrder, errorOrder] = await addOrderToDb([
                { ...orderData, clientId },
            ]);
            if (errorOrder) {
                setError(errorOrder);
            } else if (dataOrder[0].id) {
                setOrderId(dataOrder[0].id);
                toggleCardOpen();
            }
        }
    };
    const prepareDataForPostRequest = (values) => {
        const {
            name,
            email,
            phoneNumber,
            address,
            zipcode,
            city,
            country,
            paymentType,
        } = values;
        const clientData = {
            name,
            email,
            phoneNumber,
            address,
            zipcode,
            city,
            country,
        };
        const orderData = { paymentType, shippingFee, vatValue, grandTotal };
        return [clientData, orderData];
    };

    return (
        <div className="relative">
            <Overlay />
            <NavBar />
            {error && <Error error={error.data || error.message} />}
            {isModalOpen && (
                <CheckoutConfirmationModal
                    cartItems={cartItems}
                    itemsNo={cartItems.length}
                    grandTotal={grandTotal}
                    orderId={orderId}
                />
            )}
            {!error && (
                <div className="container relative w-screen">
                    <button
                        onClick={() => {
                            navigate(-1);
                        }}
                        className="my-6 text-sm opacity-50"
                    >
                        Go back
                    </button>
                    <div className="mb-24 rounded-lg bg-white p-6 lg:max-w-[42.6rem] lg:p-12">
                        <h1 className="mb-8 text-heading-4 uppercase sm:text-heading-3">
                            checkout
                        </h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleOnSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="mb-4 text-subtitile uppercase text-orange">
                                        Billing Details
                                    </div>
                                    <div className="mb-8 flex w-full flex-col justify-between gap-y-6 sm:mb-12 sm:flex-row sm:flex-wrap">
                                        <CustomInputFields
                                            type="name"
                                            name="name"
                                            placeholder="Alexei Ward"
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
                                    <div className="mb-4 text-subtitile uppercase text-orange">
                                        Shipping info
                                    </div>
                                    <div className="mb-8 flex w-full flex-col justify-between gap-y-6 sm:mb-12 sm:flex-row sm:flex-wrap">
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
                                    <PaymentDetails
                                        onChange={handlePaymentMethodChange}
                                        paymentMethod={paymentMethod}
                                    />
                                    <div
                                        className="right-0 top-16 m-auto flex w-full
                                                max-w-[21.8rem] flex-col gap-6
                                                rounded-lg bg-white py-8 text-black lg:absolute lg:px-8"
                                    >
                                        <div className="text-heading-6 uppercase">
                                            summary
                                        </div>
                                        <ul className="flex flex-col">
                                            {cartItems.map((item) => (
                                                <CartItem
                                                    key={item.name}
                                                    item={item}
                                                />
                                            ))}
                                        </ul>
                                        <div>
                                            <div className="mb-2 flex items-center justify-between">
                                                <div className="text-p uppercase opacity-50">
                                                    Total
                                                </div>
                                                <div className="text-heading-6">
                                                    ${totalPrice}
                                                </div>
                                            </div>
                                            <div className="mb-2 flex items-center justify-between">
                                                <div className="text-p uppercase opacity-50">
                                                    shipping
                                                </div>
                                                <div className="text-heading-6">
                                                    ${shippingFee}
                                                </div>
                                            </div>
                                            <div className="mb-6 flex items-center justify-between">
                                                <div className="text-p uppercase opacity-50">
                                                    vat(included)
                                                </div>
                                                <div className="text-heading-6">
                                                    ${vatValue}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-p uppercase opacity-50">
                                                    grand total
                                                </div>
                                                <div className="text-heading-6 text-orange">
                                                    ${grandTotal}
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="color-transition-effect w-full cursor-pointer bg-orange px-8 py-4 text-center text-button uppercase text-white hover:bg-orange-lighter disabled:bg-orange-lighter"
                                        >
                                            {isSubmitting ? (
                                                <Loader />
                                            ) : (
                                                'Continue & pay'
                                            )}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

const PaymentDetails = ({ onChange, paymentMethod }) => {
    return (
        <div>
            <div className="mb-4 text-subtitile uppercase text-orange">
                payment details
            </div>
            <fieldset
                role="group"
                aria-labelledby="my-radio-group"
                className="flex w-full flex-col justify-between gap-y-6 sm:flex-row sm:flex-wrap"
            >
                <label className="w-full text-sm font-bold capitalize">
                    Payment Method
                </label>
                <CustomInputFields
                    type="radio"
                    name="paymentType"
                    value="e-money"
                    id="e-money"
                    className="peer mr-4 inline-block"
                    label="e-Money"
                    onClick={() => onChange('e-money')}
                />
                <CustomInputFields
                    type="radio"
                    name="paymentType"
                    value="cash on delivery"
                    id="cash-on-delivery"
                    className="mr-4 inline-block"
                    label="Cash on Delivery"
                    onClick={() => onChange('cash-on-delivery')}
                />

                {paymentMethod === 'e-money' && <EMoneyDetails />}
                {paymentMethod === 'cash-on-delivery' && (
                    <CashOnDeliveryDetails />
                )}
            </fieldset>
        </div>
    );
};

const EMoneyDetails = () => {
    return (
        <div
            id="e-money-payment-details"
            className="mb-8 flex w-full flex-col justify-between gap-y-6 sm:mb-12 sm:flex-row sm:flex-wrap"
        >
            <CustomInputFields
                type="text"
                pattern="[0-9]*"
                name="emoneyNumber"
                label="e-Money Number"
                placeholder="238521993"
            />
            <CustomInputFields
                type="text"
                pattern="[0-9]*"
                name="emoneyPin"
                label="e-Money PIN"
                placeholder="6891"
            />
        </div>
    );
};

const CashOnDeliveryDetails = () => {
    return (
        <div id="cash-on-delivery-details" className="flex items-center gap-6">
            <img
                src="/assets/checkout/icon-cash-on-delivery.svg"
                alt="icon cash on delivery"
                className="h-[3rem] w-[3rem] shrink-0 fill-orange"
            />
            <div className="text-xs opacity-50 sm:text-sm">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
            </div>
        </div>
    );
};

export default Checkout;
