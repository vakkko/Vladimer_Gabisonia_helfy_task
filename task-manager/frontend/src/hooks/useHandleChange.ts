import { useState } from "react";

const useHandleChange = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  return { value, onChange, setValue };
};

export default useHandleChange;
