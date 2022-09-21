import React from 'react'
import { CheckInput } from './Password.style';

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <CheckInput type="checkbox" checked={value} onChange={onChange}></CheckInput>
            {label}
        </label>
    );
};
export default Checkbox;