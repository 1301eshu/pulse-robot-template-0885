import React from 'react';
import './GTMButton.css';

interface GTMButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const GTMButton: React.FC<GTMButtonProps> = ({ 
  isActive = false, 
  onClick, 
  children 
}) => {
  return (
    <button
      className={`TabsList2027980309__tab wixui-tabs__item has-custom-focus ${isActive ? 'TabsList2027980309--current' : ''}`}
      onClick={onClick}
      role="tab"
      tabIndex={0}
      aria-selected={isActive}
    >
      <span className="TabsList2027980309__label">{children}</span>
    </button>
  );
};

export default GTMButton;