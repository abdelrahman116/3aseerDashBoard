import { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center justify-center h-2 bg-gray-100">
      <button
        onClick={() => setIsOn(!isOn)}
        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 w-20 ${
          isOn
            ? "bg-green-500 text-white shadow-lg"
            : "bg-gray-300 text-gray-700"
        }`}
      >
        {isOn ? "نشط" : "معطل"}
      </button>
    </div>
  );
}
