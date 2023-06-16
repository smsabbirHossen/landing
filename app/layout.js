import "../styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app scroll-smooth relative">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
