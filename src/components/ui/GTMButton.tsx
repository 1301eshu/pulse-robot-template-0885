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
      className={`gtm-button ${isActive ? 'gtm-button--active' : ''}`}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
    >
      <span className="gtm-button__label">{children}</span>
    </button>
  );
};

export default GTMButton;