import React, { useEffect, useState } from "react";

const TypingEffect: React.FC<{ text: string; speed?: number }> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(prevText => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(typingInterval);
        setTimeout(() => setDisplayText(text), speed);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

export default TypingEffect;
