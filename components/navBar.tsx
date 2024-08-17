"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, animate, motion, stagger } from "framer-motion";

const NavBar = () => {
  return (
    <div className="flex h-[100px] w-full justify-between fixed top-0 z-20 px-[15%] bg-white items-center shadow">
      <div className="flex items-center z-20">
        <Link
          href="/"
          className="w-[150px] h-[74px] relative items-center mt-2"
        >
          <Image src="/images/logo.png" alt="logo" fill />
        </Link>
      </div>
      <div className="flex gap-x-4 relative h-full items-center">
        <LinkButton label="회사소개" link="company" />
        <LinkButton label="사업소개" link="/business" />
        <LinkButton label="홍보·고객센터" link="/support" />
        <LinkButton label="협력업체" link="/partners" />
      </div>
    </div>
  );
};

const staggerListItems = stagger(0.1, { startDelay: 0.15 });

const LinkButton = ({ label, link }: { label: string; link: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={link} className="px-8 font-[500] text-xl">
        {label}
      </Link>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            className="absolute top-[100px] w-full bg-white shadow-md z-0"
            initial={{ height: 0 }}
            transition={{ duration: 0.2 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <motion.div
              className="h-[4px] bg-aro-blue"
              initial={{ width: 0 }}
              transition={{ duration: 0.3 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
            />
            <SubLinkButton label="인사말" link="/" index={1} />
            <SubLinkButton label="인사말" link="/" index={2} />
            <SubLinkButton label="인사말" link="/" index={3} />
            <SubLinkButton label="인사말" link="/" index={4} />
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const SubLinkButton = ({
  label,
  link,
  index,
}: {
  label: string;
  link: string;
  index: number;
}) => (
  <motion.li
    className="h-[50px] items-center"
    initial={{ opacity: 0 }}
    transition={{ duration: 0.3, delay: index * 0.08 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0 } }}
  >
    <Link
      href={link}
      className="block w-full h-full text-center text-lg text-default-gray-6 hover:text-white hover:bg-aro-green leading-[50px]"
    >
      {label}
    </Link>
  </motion.li>
);

export default NavBar;
