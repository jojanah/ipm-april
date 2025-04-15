import React, { useState } from "react";
import styles from "./Menu.module.css";

const Circle = ({ label, items, onItemClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.circularMenu}>
      <input
        className={styles.circularMenuButton}
        id={`circular-menu-${label}`}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <label className={styles.circularMenuIcon} htmlFor={`circular-menu-${label}`}>
        <div className="hamburger hamburger-bar">{label}</div>
      </label>

      {Array.isArray(items) &&
        items.map((item, index) => (
          <span
            key={index}
            className={styles.circularMenuItem}
            onClick={() => onItemClick(item.description, item.name, item.details, item.facilities)}
          >
            {item.name}
          </span>
        ))}
    </div>
  );
};

export default Circle;
