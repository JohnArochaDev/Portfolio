import React, { useState, useEffect } from 'react';
import './TypingEffect.css'

export default function TypingEffect({ setCompletedTexts, completedTexts, textArrays, currentText, setCurrentText, arrayIndex, setArrayIndex, stringIndex, setStringIndex, charIndex, setCharIndex, typingSpeed = 5 }) {

  useEffect(() => {
    if (arrayIndex < textArrays.length) {
      if (stringIndex < textArrays[arrayIndex].length) {
        if (charIndex < textArrays[arrayIndex][stringIndex].length) {
          setTimeout(() => {
            setCurrentText((prev) => prev + textArrays[arrayIndex][stringIndex][charIndex]);
            setCharIndex(charIndex + 1);
          }, typingSpeed);
        } else {
          // Append completed text to completedTexts and prepare for the next string
          setTimeout(() => {
            setCompletedTexts((prev) => [...prev, currentText + ' ']); // Add the currentText to completedTexts
            setCurrentText(''); // Reset currentText for the next string
            setCharIndex(0); // Reset charIndex for the next string
            setStringIndex(stringIndex + 1); // Move to the next string
          }, 100); // Adjust pause time as needed
        }
      } else {
        // Move to the next array of strings
        setStringIndex(0); // Reset stringIndex for the next array
        setArrayIndex(arrayIndex + 1); // Move to the next array
      }
    }
    // No else part needed here to stop because we automatically stop when arrayIndex >= textArrays.length
  }, [charIndex, stringIndex, arrayIndex, textArrays, typingSpeed, currentText]);

  return (
    <div>
      {completedTexts.map((text, index) => (
        <div className='tText' key={index}>➜ {text}</div>
      ))}
      <div className='tText' >{currentText ? '➜ ' : ''}{currentText}</div> {/* Display the currently typing text */}
    </div>
  );
};
