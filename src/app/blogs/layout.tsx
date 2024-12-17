import Navbar from "../components/header";
import Footer from "../components/footer";
export default function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
       <Navbar/>
       {children}
       <Footer/>
      </div>
    );
  }