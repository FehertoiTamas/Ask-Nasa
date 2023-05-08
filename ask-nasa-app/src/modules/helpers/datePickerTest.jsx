import { useRef } from "react";

const DatePicker = ({ selected, onChange }) => {
  const dateInputRef = useRef(null);

  const handleChange = () => {
    const selectedDate = dateInputRef.current.value;
    onChange(new Date(selectedDate));
  };

  return (
    <div>
      <input type="date" onChange={handleChange} ref={dateInputRef} />
    </div>
  );
};

export default DatePicker;