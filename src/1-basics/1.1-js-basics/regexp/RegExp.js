/**
 * This constructs a utility for validating input, such as email, phone and password.
 */
export function Validator() {
  /**
   * Checks if an email matches common pattern 'firstpart@secondpart.end' an returns boolean result.
   * 
   * @param {string} email Email to validate
   * @returns True, if input email matches pattern
   */
  this.validateEmail = function (email) {
    return /^[a-zA-Z\d][a-zA-Z-\.\+\d]{1,19}@[\w\.!\$%&’\*\+\/=\?\^-]{1,15}\.[a-zA-Z]{1,5}$/g.test(
      email
    );
  };

  /**
   * Checks if a phone number matches common pattern '+38 (099) 567 8901' and its length is <=25; 
   * returns boolean result.
   * 
   * @param {string} phone Phone number to validate
   * @returns True, if input number matches pattern and has appropriate length
   */
  this.validatePhone = function (phone) {
    return (
      typeof phone === "string" &&
      phone.length <= 25 &&
      /^[- ]*(\+[- ]*3[- ]*8)?[- ]*\(?[- ]*(\d[- ]*){3}\)?[- ]*(\d[- ]*){7}$/g.test(
        phone
      )
    );
  };

  /**
   * Checks if a password only contains digits (>= 1 is a must), letters 
   * (uppercase and lowercase >= 1 is a must for both) or '_' and has at least 8 chars.
   * 
   * @param {string} password Password to validate
   * @returns True, if input password matches requirements. 
   */
  this.validatePassword = function (password) {
    return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\w{8,}$/g.test(password);
  }
}