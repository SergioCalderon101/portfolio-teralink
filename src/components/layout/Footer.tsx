import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto text-center text-text-muted text-sm">
        <p>&copy; {t("copyright")}</p>
      </div>
    </footer>
  );
}
