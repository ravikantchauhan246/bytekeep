import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="flex mb-10">
          <Image
            src="/favicon.ico"
            alt="logo"
            width="150"
            height="81"
            className="h-auto"
          />
          <p className="text-white mt-7 font-light text-5xl">ByteKeep</p>
         
          </div>
          

          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your bytes the best way</h1>
            <p className="body-1">
              This is a simple app to manage your files the best way. You can  
              sign in or sign up to start using it.
            </p>
          </div>
          <Image
            src="/cloud-logo.png"
            alt="animated-logo"
            width={441}
            height={442}
            className="transition-all hover:rotate-2 hover:scale-105"
            unoptimized={true}
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          
          {children}
        </div>

      </section>
    </div>
  );
};

export default Layout;
