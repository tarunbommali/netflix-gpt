export const checkSignInValidateData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email
    );
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      password
    );
    if (!isEmailValid) return "Email ID is not valid";
  
    if (isPasswordValid=== "") return "Password is not required";
    return null;
  };
  
  export const checkSignUpValidateData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email
    );
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      password
    );
  
    if (!name) return "Name is required";
  
    if (!isEmailValid) return "Email ID is not valid";
  
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
  };
  