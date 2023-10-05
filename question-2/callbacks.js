// Function to create a resolved promise with a timeout
const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'delayed Success!' });
      }, 500);
    });
  };
  
  // Function to create a rejected promise with a timeout
  const rejectedPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('error: delayed exception!'));
      }, 500);
    });
  };
  
  // Call the promises separately and handle them
  resolvedPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
  rejectedPromise()
    .then((result) => {
      console.log(result); // This won't be executed in this case
    })
    .catch((error) => {
      console.error(error);
    });
  