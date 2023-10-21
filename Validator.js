function telephoneCheck(str) {
  let regex =
    /^\d{3}\-\d{3}\-\d{4}$|^1?\(\d{3}\)\d{3}\-\d{4}$|^\d{10}$|^1\s*[\(]?\d{3}[\)]?[\s*|-]\d{3}[\s*|-]\d{4}$/;
  let result = str.match(regex);
  if (result && str.length >= 10) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555");
