import React from 'react';
type DropdownProps = {
    label: string;
    options: string[];
    onSelect: (value: string) => void;
};
const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => (
    <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">{label}</label>
        <select
            onChange={(e) => onSelect(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default Dropdown;