export interface PriorityFieldProps {
  priority: {
    value: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
}
