import { useRouteError, useNavigate } from 'react-router-dom';
import { ButtonDefault } from './Buttons';

function Error() {
    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error);

    return (
        <div className='flex flex-col items-center gap-10 h-screen justify-center'>
            <h1 className='text-heading-2'>Something went wrong</h1>
            <p className='text-p'>{error.data || error.message}</p>

            <ButtonDefault
                content="Back to previous page"
                handleClick={() => navigate(-1)}
                className="bg-orange hover:bg-orange-lighter"
            />
        </div>
    );
}

export default Error;