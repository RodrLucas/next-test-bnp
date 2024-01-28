import { useState, useEffect } from "react";

type CounterProps = {
  initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const updatedCount = prevCount + 1;
        if (updatedCount === 10) {
          window.dispatchEvent(new CustomEvent("onCounterUnmount"));
          clearInterval(interval);
        }
        return updatedCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("onCounterMount"));
    return () => {
      window.dispatchEvent(new CustomEvent("onCounterUnmount"));
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("onCounterUpdate"));
  }, [count]);

  return <div>{count}</div>;
};
