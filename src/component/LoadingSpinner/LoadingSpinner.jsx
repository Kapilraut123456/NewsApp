import "./LoadingSpinner.css";
const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div
        className="spinner-border text-info"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
