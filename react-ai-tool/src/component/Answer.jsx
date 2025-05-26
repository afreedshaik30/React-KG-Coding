import React, { useEffect, useState } from "react";

const Answer = ({ ans }) => {
  const [heading, setHeading] = useState(false);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
    }
  }, [ans]);

  function checkHeading(str) {
    return /^\*\*(.+)\*\*$/.test(str.trim());
  }

  return (
    <>
        <p className="text-left ml-2.5 block pt-2 text-white">{ans}</p>
    </>
  );
};

export default Answer;
