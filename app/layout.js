"use client";
import Reval from "@/components/Reval";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import { useState, useEffect } from "react";
import PreLoader from "@/components/PreLoader";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        <Reval>
          <div className="main">
            <div className="gradient"></div>
          </div>
        </Reval>

        {loading ? (
          <main className="app scroll-smooth relative">
            <Reval>
              <Nav />
            </Reval>
            {children}
          </main>
        ) : (
          <PreLoader />
        )}
      </body>
    </html>
  );
};

export default RootLayout;
