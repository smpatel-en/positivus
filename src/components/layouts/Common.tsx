import Header from "../generic/Header";
import Footer from "../generic/Footer";
import { Outlet } from "react-router";

export default function CommonLayout() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="min-h-screen pt-22 lg:pt-30">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
