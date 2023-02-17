const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count += 1;
    console.log(count);
  };
  return (
    <div>
      <p>{count}</p>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
