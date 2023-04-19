import styles from "styles/button.module.css";

export const Button = ({ type="default", htmlType="button", children }) => (
  <button className={[type === "primary" ? styles.button_primary : styles.button_default]} type={htmlType}>{children}</button>
);
