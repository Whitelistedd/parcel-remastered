
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

interface LayoutProps {
    children: object
}

const Layout : React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout