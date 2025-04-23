import React from 'react';
import './dropdown.css';
type DropdownProps = {
    label: string;
    options: string[];
    onSelect: (value: string) => void;
};
const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => (
    <div className="dropdown-container">
        <label className="drodpdown-label">{label}</label>
        <select
            onChange={(e) => onSelect(e.target.value)}
            className="drodpdown-select">
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default Dropdown;