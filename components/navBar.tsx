import Image from "next/image";
import Link from "next/link";

const NavBar = () => (
  <div className="flex h-[100px] w-full justify-between py-3 px-[15%] bg-white items-center shadow fixed top-0 z-20">
    <div className="flex items-center">
      <div className="w-[150px] h-[74px] relative items-center mt-2">
        <Image src="/images/logo.png" alt="logo" fill />
      </div>
    </div>
    <div className="flex gap-x-4">
      <LinkButton label="회사소개" link="/company" />
      <LinkButton label="사업소개" link="/business" />
      <LinkButton label="홍보·고객센터" link="/support" />
      <LinkButton label="협력업체" link="/partners" />
    </div>
  </div>
);

const LinkButton = ({ label, link }: { label: string; link: string }) => (
  <Link href={link} className="px-8 font-semibold text-xl">
    {label}
  </Link>
);

export default NavBar;
