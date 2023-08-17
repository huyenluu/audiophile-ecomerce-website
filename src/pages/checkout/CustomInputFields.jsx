import { Field, ErrorMessage } from 'formik';

export function CustomRadio({ values, ...props }) {
    return (
        <div
            role="group"
            aria-labelledby="my-radio-group"
            className="flex flex-wrap gap-4"
        >
            <label
                htmlFor={props.name}
                className="text-sm font-bold capitalize"
            >
                {props.label ? props.label : props.name}
            </label>
            {values.map((value) => (
                <label
                    htmlFor={value}
                    key={value}
                    className="w-full rounded-lg
                                border-[.5px] border-[#CFCFCF] bg-white px-6 py-4 
                                text-sm font-bold
                                placeholder:font-bold placeholder:opacity-40 focus:border-orange focus:font-bold
                                focus:caret-orange focus:outline-none focus:invalid:border-red focus:invalid:text-red"
                >
                    <Field
                        type="radio"
                        name={props.name}
                        value={value}
                        id={value}
                        className="mr-4 inline-block"
                    />
                    {value}
                </label>
            ))}
        </div>
    );
}
function CustomInputFields(props) {
    return (
        <div className="relative flex w-full flex-col gap-2 sm:w-[48%]">
            {props.type !== 'radio' && (
                <label
                    htmlFor={props.name}
                    className="text-sm font-bold capitalize"
                >
                    {props.label ? props.label : props.name}
                </label>
            )}
            <div
                className={
                    props.type === 'radio'
                        ? 'w-full rounded-lg border-[.5px] border-[#CFCFCF] bg-white px-6 py-4'
                        : ''
                }
                id={`${props.id}-outer`}
            >
                <Field
                    {...props}
                    className={`rounded-lg border-[.5px] border-[#CFCFCF] px-6 py-4 
                                placeholder:font-bold placeholder:opacity-40
                                focus:border-orange focus:font-bold focus:caret-orange focus:outline-none
                                ${props.className}
                                ${props.type !== 'radio' && 'w-full'}`}
                />
                {props.type === 'radio' && (
                    <label htmlFor={props.name} className="text-sm font-bold">
                        {props.label ? props.label : props.name}
                    </label>
                )}
            </div>
            <ErrorMessage name={props.name}>
                {(msg) => (
                    <div className="absolute right-0 top-0 text-xs text-red">
                        {msg}
                    </div>
                )}
            </ErrorMessage>
        </div>
    );
}

export default CustomInputFields;
