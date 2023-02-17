import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>multiple returns</h2>
    </div>
  );
};
export default MultipleReturnsBasics;
