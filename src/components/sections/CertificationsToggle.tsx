"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Card } from "@/components/ui/Card";

export function CertificationsToggle() {
  const t = useTranslations("about");
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? certifications : certifications.slice(0, 3);

  return (
    <>
      <div className="space-y-3">
        {visible.map((cert) => (
          <Card key={cert.name} className="p-4">
            <h4 className="font-semibold text-sm text-text-primary mb-1">
              {cert.name}
            </h4>
            <p className="text-xs text-text-muted">
              {cert.issuer} —{" "}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {t("viewCertificate")}
              </a>
            </p>
          </Card>
        ))}
      </div>

      {certifications.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 w-full py-2 px-4 bg-surface hover:bg-surface-hover text-text-secondary rounded-lg transition-colors text-sm flex items-center justify-center gap-2 border border-border hover:border-border-hover"
        >
          <span>{showAll ? t("showLess") : t("showAll")}</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </>
  );
}
