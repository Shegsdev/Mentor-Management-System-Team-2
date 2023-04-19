export const Button = ({ type="default", htmlType="button", children }) => (
  <button
    type={htmlType}
    style={{
      border: 0,
      borderRadius: "5px",
      background: type === "primary" ? "#058b94" : "#f7feff",
      color: type === "primary" ? "#f7feff" : "#058b94",
      cursor: "pointer",
      fontSize: "12px",
      padding: "6px 15px",
    }}>
    {children}
  </button>
);
