import Badge from "../components/Badge/Badge";
import "./styles/badge.css";

const badgeSizes = {
  small: "sm",
  medium: "md",
  large: "lg",
};

const badgeColors = {
  neutral: "neutral",
  danger: "danger",
  warning: "warning",
  success: "success",
  brand: "brand",
};

const BadgeRow = ({ color }) => (
  <div className="badge_sizes">
    {Object.values(badgeSizes).map((size) => (
      <Badge key={size} color={color} size={size} />
    ))}
  </div>
);

function BadgePage() {
  return (
    <div className="container">
      <div className="badge_colors">
        {Object.values(badgeColors).map((color) => (
          <BadgeRow key={color} color={color} />
        ))}
      </div>
    </div>
  );
}

export default BadgePage;
