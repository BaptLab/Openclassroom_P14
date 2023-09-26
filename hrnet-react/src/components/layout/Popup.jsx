import React from "react";

/**
 * Popup Component
 *
 * This component represents a popup window that can be triggered to display
 * additional content.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.trigger - A boolean flag to control the visibility of the popup.
 * @param {string} props.closingMsg - The text to display on the close button.
 * @param {string|JSX.Element} props.popUpMsg - The content to display within the popup.
 * @param {function} props.setTrigger - A function to toggle the visibility of the popup.
 *
 * @returns {JSX.Element|null} The Popup component JSX or null if not triggered.
 */
const Popup = (props) => {
  return props.trigger ? (
    <div id="popup" className="popup-window">
      <div className="popup-inner">
        <button className="btn close-btn" onClick={() => props.setTrigger(false)}>
          {props.closingMsg}
        </button>
        {props.popUpMsg}
      </div>
    </div>
  ) : null;
};

export default Popup;
