"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language.startsWith("es") ? "es" : "en";
    router.replace(`/${browserLang}`);
  }, [router]);

  return null;
}
