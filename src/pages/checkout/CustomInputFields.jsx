import { Field, ErrorMessage } from 'formik';

export function CustomRadio({values, ...props}) {
    return (
        <div role="group" aria-labelledby="my-radio-group" className='flex flex-wrap gap-4'>
            <label htmlFor={props.name} className='text-sm font-bold capitalize'>{props.label ? props.label : props.name}</label>
            {values.map( value => (
                <label htmlFor={value} key={value} className='text-sm font-bold
                                border-[.5px] border-[#CFCFCF] rounded-lg px-6 py-4 
                                placeholder:font-bold placeholder:opacity-40
                                focus:border-orange focus:outline-none focus:invalid:border-red focus:invalid:text-red
                                focus:font-bold focus:caret-orange bg-white w-full'
                >
                    <Field 
                        type="radio" 
                        name={props.name}
                        value={value}
                        id={value}
                        className="inline-block mr-4"
                    />
                    {value}
                </label>
            ))}      
        </div>
    )
    
}
function CustomInputFields(props) {
    return (
        <div className='flex flex-col gap-2 w-full sm:w-[48%] relative'>
            {props.type !== 'radio' && <label htmlFor={props.name} className='text-sm font-bold capitalize'>{props.label ? props.label : props.name}</label>}
            <div className={props.type === 'radio' ? 'border-[.5px] border-[#CFCFCF] rounded-lg px-6 py-4 bg-white w-full': ''} id={`${props.id}-outer`}>
                <Field 
                    {...props}
                    className={`border-[.5px] border-[#CFCFCF] rounded-lg px-6 py-4 
                                placeholder:font-bold placeholder:opacity-40
                                focus:border-orange focus:outline-none focus:font-bold focus:caret-orange
                                ${props.className}
                                ${props.type !== 'radio' && "w-full"}`}
                    
                />
                {props.type === 'radio' && <label htmlFor={props.name} className='text-sm font-bold'>{props.label ? props.label : props.name}</label>}

            </div>
            <ErrorMessage name={props.name}>
                {msg => <div className='text-xs text-red absolute top-0 right-0'>{msg}</div>}
            </ErrorMessage>
        </div>
    )
}

export default CustomInputFields
