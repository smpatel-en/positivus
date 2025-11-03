import Header from "../generic/Header";
import Footer from "../generic/Footer";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="min-h-screen pt-22 lg:pt-30">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
