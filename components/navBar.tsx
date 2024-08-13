import Image from "next/image";
import Link from "next/link";

const NavBar = () => (
  <div className="flex h-20 w-full justify-between py-3 px-[10%] items-center shadow">
    <div className="flex items-center">
      <div className="w-[50px] h-[50px] relative items-center">
        <Image src="/images/aro_logo.png" alt="logo" fill />
      </div>
      <div className="font-bold text-2xl">ARO</div>
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
  <Link href={link} className="px-8">
    {label}
  </Link>
);

export default NavBar;
