import { Link } from "react-router-dom"
import spaceVideo from "../../public/images/video.mp4"
const Video = () => {
    return (
        <div className="hero z-[-1000] w-full h-full object-contain">
            <div className="container">
                <video id="video" className="fixed w-full object-cover h-full z-[-1]" autoPlay loop muted  >
                    <source src={spaceVideo} type="video/mp4" />
                </video>
                <div className="content text-center absolute m-auto w-full h-full top-[40vh] ">
                    <h1 className="text-[4rem] font-bold mb-[15px] text-white">Galaxy Travel.</h1>
                    <p className="text-xl font-semibold uppercase mb-[1.6rem] text-white">
                        World First civlian Space Travel.
                    </p>
                    <div className="">
                        <Link to="/training" className="btn" >Training</Link>
                        <Link to="/contact" className="btn btn-light" >launch</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video