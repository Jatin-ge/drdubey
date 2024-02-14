"use client"
import { useEffect } from 'react';

const GTM = ({ gtmId }) => {
  useEffect(() => {
    if (!gtmId) return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [gtmId]);

  return null;
};

export default GTM;