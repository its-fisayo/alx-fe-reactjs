function Footer() {
  const footerStyle = {
    marginTop: "40px",
    padding: "10px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    color: "#555",
  };

  return <footer style={footerStyle}>© {new Date().getFullYear()} My Company. All rights reserved.</footer>;
}

export default Footer;
