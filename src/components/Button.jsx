/* eslint-disable react/prop-types */


function Button({toggleButton, children }) {
  return <button className="button" onClick={toggleButton}>{children}</button>;
}

export default Button