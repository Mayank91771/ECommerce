export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

//this file is used to define user defined error message instead of predefined one by the browser.
