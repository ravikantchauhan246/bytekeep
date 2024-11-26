"use client";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarProps {
  fullName: string;
  email: string;
  avatar: string;
}

const Sidebar = ({ fullName, email }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <aside className = "sidebar">
      <Link href="/">
        <Image
          src="https://res.cloudinary.com/do9v8bgv9/image/upload/t_yolo/r9uca0pqqxaawmrjlom2"
          alt="logo"
          width={300}
          height={50}
          priority
          className="hidden h-auto lg:block"
        />
        <Image
          src="https://res.cloudinary.com/do9v8bgv9/image/upload/v1732548828/wqsr0vrxgsbjdboof0qj.svg"
          alt="logo"
          width={90}
          height={90}
          priority
          className="lg:hidden"
        />
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link href={url} key={name} className="lg:w-full">
              <li className = {cn("sidebar-nav-item",pathname === url && "shad-active")}>
                <Image src={icon} alt={name} width={24} height={24} className = {cn("nav-icon",pathname === url && 'nav-icon-active')} />
                <p className = "hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image src="/cloud-logo.png" alt="logo" width={506} height={418} className = "w-full" priority/>
      <div className = "sidebar-user-info"> 
        <Image src="/assets/images/avatar.png" alt="avatar" width={40} height={40} className = "sidebar-user-avatar"/>
        <div className = "hidden lg:block">
          <p className = "subtitle-2 capitalize">{fullName}</p>
          <p className = "caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
