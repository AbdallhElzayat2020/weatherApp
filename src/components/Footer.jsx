// import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from "react-icons/fa"
// const Footer = () => {
//     return (
//         <div className="footer">
//             <div className="footer-container ">
//                 <div className="left ">
//                     <div className="location">
//                         <FaSearchLocation size={30} style={{ marginRight: "2rem", color: "#fff" }} />
//                         <div className="">
//                             <h4 className="">House ,Tx</h4>
//                             <p className="">123 Street Name, City, Region</p>
//                         </div>
//                     </div>
//                     <div className="phone">
//                         <h4><FaPhone size={20} style={{ marginRight: "2rem" }} />+20-1212484233</h4>
//                     </div>
//                     <div className="email">
//                         <h4><FaMailBulk size={20} style={{ marginRight: "2rem" }} />aballhelzayat@gmail.com</h4>
//                     </div>
//                 </div>
//                 <div className="right ">
//                     <h4>About The Company</h4>
//                     <p>
//                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque optio minus ratione sapiente tempore soluta quia perspiciatis quam unde.
//                     </p>
//                     <div className="social">
//                         <FaFacebook size={30} style={{ marginRight: "1rem" }} />
//                         <FaLinkedin size={30} style={{ marginRight: "1rem" }} />
//                         <FaTwitter size={30} style={{ marginRight: "1rem" }} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Footer


import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from "react-icons/fa"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location flex  items-center">
                        <FaSearchLocation size={20} style={{ marginRight: "2rem", color: "#fff" }} />
                        <div className="">
                            <p>113Acme st</p>
                            <h4>House TX</h4>
                        </div>
                    </div>
                    <div className="phone flex  items-center">
                        <FaPhone size={20} style={{ marginRight: "2rem", color: "#fff" }} />
                        <h4>+201212484233</h4>
                    </div>
                    <div className="email flex  items-center">
                        <FaMailBulk size={20} style={{ marginRight: "2rem", color: "#fff" }} />
                        <h4> abdallh@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Company</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ipsum ut impedit illum culpa quae fuga sapiente corporis optio officiis?</p>
                    <div className="social flex">
                        <FaFacebook className="hover:text-red-50" size={30} style={{ marginRight: "1rem", color: "#fff" }} />
                        <FaLinkedin className="hover:text-red-50" size={30} style={{ marginRight: "1rem", color: "#fff" }} />
                        <FaTwitter className="hover:text-red-50" size={30} style={{ marginRight: "1rem", color: "#fff" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;