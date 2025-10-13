import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectionIcons = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, icon: "🧹", label: "Cleaning" },
    { id: 2, icon: "🚚", label: "Moving" },
    { id: 3, icon: "🌱", label: "Gardening" },
  ];

  const handleOptionClick = (optionId) => {
    const selected = options.find((o) => o.id === optionId);
    setSelectedOption(optionId);

    // ✅ Navigate to booking page with query param
    navigate(`/booking?category=${encodeURIComponent(selected.label)}`);
  };

  return (
    <div className="bg-gray-100 hero min-h-screen">
      <div className="hero-content text-center max-w-2xl w-full">
        <div className="flex flex-col items-center w-full">
          {/* Logo / Title */}
          <h1 className="text-9xl font-extrabold text-primary mb-10 tracking-tight">
            <span className="text-secondary">Task</span>Pal
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-base-content/70 mb-12 text-zinc-950">
            Select a category to begin exploring our resources.
          </p>

          {/* Button Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`
                  btn btn-xl rounded-full px-15 text-3xl font-semibold transition-all duration-300 shadow-md 
                  ${
                    selectedOption === option.id
                      ? "btn-primary text-primary-content shadow-xl scale-105"
                      : "btn-outline btn-neutral hover:shadow-lg hover:scale-[1.02] hover:bg-base-200"
                  }
                `}
              >
                <span className="mr-2 text-xl">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionIcons;
