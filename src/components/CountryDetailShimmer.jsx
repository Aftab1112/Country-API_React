import React from "react";
import "./CountryDetailShimmer.css";

export default function CountryDetailShimmer() {
  return (
    <div className="country-details-container">
      <div className="back-btn"></div>
      <div className="country-details">
        <div className="shimmer-card-img"></div>
        <div className="text-details">
          <div className="country-name1"></div>
          <div className="all-detail1"></div>
          <div className="all-detail2"></div>
          <div className="all-detail3"></div>
          <div className="all-detail4"></div>
          <div className="all-detail5"></div>
        </div>
      </div>
    </div>
  );
}
