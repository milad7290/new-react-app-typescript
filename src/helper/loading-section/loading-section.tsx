import React from "react";
import "./loading-section.scss";

const WithLoading=(Component: any)=> {
  return function WihLoadingComponent({ isLoading, ...props }: any) {
    if (!isLoading) return <Component {...props} />;
    return <p className="loading">بارگذاری...</p>;
  };
}
export default WithLoading;
