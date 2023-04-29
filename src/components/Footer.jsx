import React from "react";

export default function Footer() {
  const currentDate = new Date();
  return (
    <footer className="header">
      <p>Copyright@{currentDate.getFullYear()}</p>
    </footer>
  );
}
