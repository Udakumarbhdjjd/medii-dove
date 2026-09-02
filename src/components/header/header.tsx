import './header.css'
import logo from './header image/logo.png'
import lang from './header image/lang.png'
import DropDown from './drop-down';
function Header() {
    let dropDown = [
        { title: "Home", value1: "Home1", value2: "Home1", value3: "Home1", value4: "Home1" }
        , {
            title: "Doctors",
            value1: "Doctors 01",
            value2: "Doctors 02",
            value3: "Doctors Details",
        }, {
            title: "Department",
            value1: "Services 01",
            value2: "Services 02",
            value3: "Services Details",
        },
        {
            title: "Shop",
            value1: "Shop Page",
            value2: "Shop Details",
            value3: "Shopping Cart",
            value4: "Checkout",
            value5: "Wishlist",
            value6: "Login",
            value7: "Register",
        }
        , {
            title: "Pages",
            value1: "About",
            value2: "Appointment",
            value3: "Portfolio 2 Column",
            value4: "Portfolio 3 Column",
            value5: "Portfolio Slider",
            value6: "Contact",
            value7: "404 Page",
        },
        {
            title: "News",
            value1: "Blog Right Sidebar",
            value2: "Blog Left Sidebar",
            value3: "Blog No Sidebar",
            value4: "Blog 2 Column",
            value5: "Blog 2 Col Masonry",
            value6: "Blog 3 Column",
            value7: "Blog 3 Col Masonry",
            value8: "Blog Details",
            value9: "Details Left Sidebar",
            value10: "Details Audio",
            value11: "Details Video",
            value12: "Details Gallery"
        }
    ]
    return (
        <>
            <div className="header-wrapper" id='header'>
                <div className="header">
                    <div className="header-logo">
                        <img src={logo} alt="LOGO" />
                        <div className="logo-circle"> </div>
                    </div>
                    <button className="mobile-menu-btn">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="header-menu">
                        <div className="header-menu-left">
                            {dropDown.map(
                                function (item: any, index: any) {
                                    return <DropDown key={index} title={item.title} value1={item.value1} value2={item.value2} value3={item.value3} value4={item.value4} value5={item.value5} value6={item.value6} value7={item.value7} value8={item.value8} value9={item.value9} value10={item.value10} value11={item.value11} value12={item.value12} />
                                }
                            )
                            }
                        </div>
                        <div className="header-menu-right">
                            <a href="#"><i className="fa-brands fa-facebook"></i> </a>
                            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i> </a>
                            <a href="#"><i className="fa-brands fa-instagram" popoverTarget="_blank" rel="noopener noreferrer"></i></a>
                            <a href="www.youtube.com/@Is_Otaku_here"><i className="fa-brands fa-youtube" popoverTarget="_blank" rel="noopener noreferrer"></i></a>

                            <div className="header-lang"><img src={lang} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;