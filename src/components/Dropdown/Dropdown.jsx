import React, { useEffect, useRef } from 'react';
import './Dropdown.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
const Dropdown = ({ children, title, width }) => {
  const wrapper = useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  // 處理點擊外部關閉 dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest('.dropdown') !== wrapper.current) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={wrapper} className="dropdown">
      <button
        style={{ width }}
        className="dropdown__btn"
        onClick={toggleDropdown}
      >
        <span className="dropdown__title">{title}</span>
        {isOpen ? (
          <FaAngleUp className="dropdown__icon" />
        ) : (
          <FaAngleDown className="dropdown__icon" />
        )}
      </button>
      {isOpen && (
        <div className="dropdown__position">
          <div className="dropdown__content">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
