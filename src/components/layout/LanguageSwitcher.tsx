"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

export function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2 text-sm">
      {locale === "en" ? (
        <>
          <span className="text-accent font-bold">EN</span>
          <span className="text-text-muted">/</span>
          <Link href="/es" className="text-text-secondary hover:text-text-primary transition-colors">
            ES
          </Link>
        </>
      ) : (
        <>
          <Link href="/en" className="text-text-secondary hover:text-text-primary transition-colors">
            EN
          </Link>
          <span className="text-text-muted">/</span>
          <span className="text-accent font-bold">ES</span>
        </>
      )}
    </div>
  );
}
