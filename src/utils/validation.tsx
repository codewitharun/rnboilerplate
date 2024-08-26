export const nameValidation = (name: string) => {
  const specialCharReg = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const emojiReg =
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
  return specialCharReg.test(name) || emojiReg.test(name);
};

export const checkPassword = (password: string) => {
  if (!password || password.trim().length === 0) {
    return false; // Password is empty or contains only whitespace characters
  }
  let reg =
    /^(?=.*\d)(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  return reg.test(password.replace(/\s/g, "")); // Remove whitespace characters and test against the regex pattern
};

export function validateEmail(email: string) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
}
