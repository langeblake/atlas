import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MaketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
  return (
    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <Navbar />
        <main className="pt-32 pb-20">
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default MaketingLayout