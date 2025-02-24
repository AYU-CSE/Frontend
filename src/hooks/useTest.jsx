import { useState } from "react";

const useTest = (value) => {
  const [test, setTest] = useState(0);
  setTest(test + value);
};
