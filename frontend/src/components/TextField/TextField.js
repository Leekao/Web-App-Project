import React from "react"

const TextField = ({ placeholder, name, value, type, onChange }) => (
  <input
    className="ldc-textfield"
    name={name}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
)

export default TextField
