import Script from "next/script";
import React from "react";

const AdSense = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3830032890688351"
      crossOrigin="anonymous"
    />
  );
};

export default AdSense;
