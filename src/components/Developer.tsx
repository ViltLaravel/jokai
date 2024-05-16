const Developer = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <img className="inline-block h-[100px] w-[100px] rounded-full shadow-xl" src={Me} alt="profile-img" />
        <h4 className="text-lg font-poppins font-500">Nicole Amoguis <span className="text-sm font-poppins font-300">(23Yr)</span></h4>
        <h3 className="font-poppins font-300">Software Developer</h3>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="col-span-1 bg-[#EEF7FF] rounded-lg shadow-lg p-4">
            <a href="https://github.com/ViltLaravel/anime-finder">
              <img src={Github} alt="profile-img" />
            </a>
          </div>
          <div className="col-span-1 bg-[#EEF7FF] rounded-lg shadow-lg p-4">
            <a href="https://www.linkedin.com/in/nicole-amoguis-282427284/">
              <img src={Linkedin} alt="profile-img" />
            </a>
          </div>
          <div className="col-span-1 bg-[#EEF7FF] rounded-lg shadow-lg p-4">
            <a href="#">
              <img src={Instagram} alt="profile-img" />
            </a>
          </div>
          <div className="col-span-1 bg-[#EEF7FF] rounded-lg shadow-lg p-4">
            <a href="https://portfolio-henna-ten-99.vercel.app/">
              <img src={Avatar} alt="profile-img" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

import Avatar from "../assets/avatar.png"
import Github from "../assets/github.png"
import Instagram from "../assets/instagram.png"
import Linkedin from "../assets/linkedin.png"
import Me from "../assets/user_5.jpg"

export default Developer
