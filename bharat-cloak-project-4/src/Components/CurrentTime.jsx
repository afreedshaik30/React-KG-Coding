import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  console.log('Current Time painted');
  
  useEffect(() => {
    console.log("1.interval started");
    let intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("2.interval cleared");
      clearInterval(intervalID);
    };
  }, []);

  return (
    <p className="lead">
      Current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
