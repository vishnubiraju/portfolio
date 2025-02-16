import request from './request.js'; // Import request utility

const middleware = store => next => async action => {
    // Check if the action type indicates an API request
    if (!action || !action.apiConfig) {
        return next(action);
    }

    const { method, url, body, onSuccess, onFailure } = action.apiConfig;

    try {
        // Make the API request using the `request.js` utility
        const response = await request(url, method, body);

        onSuccess({
            data: response,
            store,
            next,
            action
        });


    } catch (error) {
        // Enhanced error handling: Check for error structure and handle accordingly
        const errorMessage = error.response
            ? error.response.data?.message || error.message
            : error.message;

        onFailure({ errorMessage, store, next, action });
    }

};

export default middleware;
