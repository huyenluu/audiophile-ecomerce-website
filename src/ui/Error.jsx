import { useRouteError, useNavigate } from 'react-router-dom';
import { ButtonDefault } from './Buttons';

function Error(props) {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-10">
            <h1 className="text-heading-2">Something went wrong</h1>
            {props.error && <p className="text-p">{props.error}</p>}
            {!props.error && (
                <p className="text-p">{error.data || error.message}</p>
            )}

            <ButtonDefault
                content="Back to previous page"
                handleClick={() => navigate(-1)}
                className="bg-orange hover:bg-orange-lighter"
            />
        </div>
    );
}

export default Error;
