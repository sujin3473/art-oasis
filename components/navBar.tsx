import Image from "next/image";

const NavBar = () => (
  <div className="flex h-20 justify-between py-3 items-center">
    <div className="flex items-center">
      <div className="w-[50px] h-[50px] relative items-center">
        <Image src="/images/aro_logo.png" alt="logo" fill />
      </div>
      <div className="font-bold text-2xl">ARO</div>
    </div>
    <div className="flex"></div>
  </div>
);

export default NavBar;
