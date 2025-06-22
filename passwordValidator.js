const password = (str = "") => {
    const hasUpperCase = /[A-Z]/.test(str);
    const hasLowerCase = /[a-z]/.test(str);
    const hasNumber = /[0-9]/.test(str);
    const isLongEnough = str.length >= 8;
  
    return hasUpperCase && hasLowerCase && hasNumber && isLongEnough;
  }