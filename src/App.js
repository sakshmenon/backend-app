import React, {useEffect} from "react";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:3000/")
    .then((res) => res.text())
    .then((data) => console.log(data));
  }, []);

  return <div>App</div>;
};

export default App;