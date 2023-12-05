"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b7363218-efb9-4c46-b2fb-a7f19248e771");
  }, []);

  return null;
};
