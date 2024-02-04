// components/Select.js
import "./index.css";

const Select = ({ options, placeholder, value, onChange }: any) => {
  console.log(options);
  return (
    <div className="order__select" style={{ flexGrow: "1" }}>
      <select
        className="order__select_ focus:shadow-outline block w-full appearance-none border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option: any, idx: any) => (
          <option key={option.value + idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Select;
