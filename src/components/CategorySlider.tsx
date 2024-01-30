import React, { useState } from "react";
import { Switch } from "antd";

interface Props {
  categoryName: string;
  pricePerSquare: number;
  coefficient: number;
  area: number;
}

const CategorySlider = ({
  categoryName,
  pricePerSquare,
  coefficient,
  area,
}: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        marginTop: 10,
      }}
    >
      <div style={{ justifyContent: "space-between" }}>
        <Switch onChange={() => setShowDetails(!showDetails)} />
        <span>{categoryName}</span>
        {showDetails && (
          <span style={{ textAlign: "right" }}>
            {pricePerSquare * area * coefficient}
          </span>
        )}
      </div>
      {showDetails && (
        <div>
          <span style={{ marginLeft: 43 }}>Chi tiết: </span>
          <span style={{ textAlign: "right" }}>
            {(area * coefficient).toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default CategorySlider;
