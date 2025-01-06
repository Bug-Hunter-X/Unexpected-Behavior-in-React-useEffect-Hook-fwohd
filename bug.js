```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Setting count directly
    setCount(prevCount => prevCount + 1);
    // Correct logic: Using a timer
    // const intervalId = setInterval(() => {
    //   setCount(prevCount => prevCount + 1);
    // }, 1000);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```