import React from 'react';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { ButtonDefault } from './Buttons';

type ErrorProps = {
    error: string;
}
function ErrorPage({errorProps}) {
    const error = useRouteError();
    const navigate = useNavigate();
    let errorMessage: string;
    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.error?.message || error?.statusText;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else {
        console.error(error);
        errorMessage = 'Unknown error';
      }

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-10">
            <h1 className="text-heading-2">Something went wrong</h1>
            {errorProps && <p className="text-p">{errorProps}</p>}
            {!errorProps && (
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

export default ErrorPage;
