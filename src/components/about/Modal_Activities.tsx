import React from 'react';
import './About_Modal_Activities_Styles.css';
import * as Unicons from '@iconscout/react-unicons';

interface ModalActivitiesProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  icon: string;
}

const ModalActivities: React.FC<ModalActivitiesProps> = ({ isOpen, onClose, title, text, icon }) => {
  if (!isOpen) {
    return null;
  }

  const IconComponent = Unicons[icon];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-container-close">
          <div className="modal-close" onClick={onClose}><Unicons.UilTimes size="20" /></div>
        </div>
        <div className="modal-main">
          <div className="modal-icon-activities"><IconComponent size="40"/></div>
          <div className="modal-content-text">
            <h3 className="modal-title">{title}</h3>
            <p className="modal-text">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalActivities;
