import React, { useState, useEffect } from 'react';
import './NewsletterPopup.css';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isPopupDisplayed = localStorage.getItem('newsletterPopupDisplayed');
    if (!isPopupDisplayed) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('newsletterPopupDisplayed', 'true');
  };

  return (
    <div className={`newsletter-popup ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={handleClose}>X</button>
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get updates and exclusive offers straight to your inbox!</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterPopup;