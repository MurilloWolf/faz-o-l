"use client";

import React, { useEffect } from "react";

type AdBannerProps = {
  className?: string;
};

const AdBanner = ({ className }: AdBannerProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className={`bg-gray-300 w-48 h-48` + className}>
      <ins
        className="adsbygoogle w-48 h-48"
        style={{ display: "block" }}
        data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_AD_ID}`}
        data-ad-slot={process.env.NEXT_PUBLIC_AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;
