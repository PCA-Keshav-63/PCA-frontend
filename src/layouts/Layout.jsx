import Header from "../components/layout/Header.jsx"
import Footer from "../components/layout/Footer.jsx"

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
