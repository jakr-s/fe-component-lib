import clsx from "clsx";
import styles from "./Badge.module.css";

export default function Badge({
  size = "sm",
  color = "brand",
  children = "Label",
}) {
  return (
    <span
      className={clsx(
        styles.badge,
        styles[`badge_size_${size}`],
        styles[`badge_color_${color}`]
      )}
    >
      {children}
    </span>
  );
}
