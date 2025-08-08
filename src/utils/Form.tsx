import { type ReusableFormProps } from "../types/types";

const Form: React.FC<ReusableFormProps> = ({
  children,
  onSubmit,
  className = "",
  formId,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`space-y-4 p-4  rounded ${className}`}
      id={formId}
    >
      {children}
    </form>
  );
};

export default Form;
