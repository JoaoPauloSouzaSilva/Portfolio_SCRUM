import React from 'react';
import './About_Testimonials_Modal_Styles.css';
import * as Unicons from '@iconscout/react-unicons';

interface ModalTestimonialsProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  sub_title: string;
}

const ModalTestimonials: React.FC<ModalTestimonialsProps> = ({ isOpen, onClose, title, text, sub_title}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="testimonials-modal-overlay">
      <div className="testimonials-modal-content">
        <div className="testimonials-modal-container-close">
          <div className="testimonials-modal-close" onClick={onClose}><Unicons.UilTimes size="20" /></div>
        </div>
        <div className="testimonials-modal-main">
          <div className="testimonials-modal-content-left">

              <img className='testimonials-modal-img' src="src/assets/images/avatar-emoji.png" alt="Avatar Emoji" />

            <div className="testimonials-modal-icon"><Unicons.UilCommentDots size="40"/></div>
          </div>
          <div className="testimonials-modal-content-text">
            <h3 className="testimonials-modal-title">{title}</h3>
            <h5 className="testimonials-modal-subtitle">{sub_title}</h5>
            <p className="testimonials-modal-text">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTestimonials;
