import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center" style={{margin: '15%'}}>
      <div className="spinner-border text-primary" role="status" style={{width:"8rem", height:"8rem", borderWidth: "0.65rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
