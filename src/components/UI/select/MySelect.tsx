import React, { ChangeEvent } from 'react'

interface Option {
  value: string;
  name: string;
}

interface MySelectProps {
  options: Option[];
  defaultValue: string;
  value: string;
  onChange: (selectedSort: string) => void;
}

const MySelect = ({ options, defaultValue, value, onChange }: MySelectProps) => {
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select value={value} onChange={onSelectChange}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
