import "./spinner.css";

type SpinnerProps = {
  modal?: boolean;
  size?: string;
  borderWidth?: string;
};

const Spinner = ({
  size = "20px",
  borderWidth = "4px",
  modal,
}: SpinnerProps) => {
  if (modal) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#07090a66]  flex items-center justify-center">
        <span
          className="mini-loader"
          style={{ width: size, height: size, borderWidth }}
        ></span>
      </div>
    );
  }
  return (
    <span
      className="mini-loader"
      style={{ width: size, height: size, borderWidth }}
    ></span>
  );
};

export default Spinner;
