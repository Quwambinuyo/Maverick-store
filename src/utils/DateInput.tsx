import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function DateInput() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="dd/mm/yyyy"
      className="w-full font-bold  text-primary-color px-3 py-2 border border-primary-color rounded-lg"
    />
  );
}
