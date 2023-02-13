import { useState } from "react";

// const UseStateBasics = () => {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button type="button" className="btn" onClick={handleClick}>
//         click
//       </button>
//     </div>
//   );
// };

const UseStateBasics = () => {
  let title = "Random Title";
  const [text, setText] = useState(title);
  const handleClick = () => {
    if (text === "Random Title") {
      setText("Hello People");
    } else {
      setText("Random Title");
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
