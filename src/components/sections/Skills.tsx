"use client";

import { useTranslations } from "next-intl";
import { Code, Layers, Languages } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Skills() {
  const t = useTranslations("skills");
  const programmingLanguages = t.raw("programmingLanguages") as string[];
  const techStackItems = t.raw("techStackItems") as string[];
  const spoken = t.raw("spoken") as Array<{
    name: string;
    level: string;
    percent: number;
  }>;

  return (
    <section id="skills" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading title={t("title")} />
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          <StaggerItem>
            <Card className="p-6 h-full" hover={false}>
              <h3 className="text-base font-bold mb-4 flex items-center gap-3 text-text-primary">
                <Code size={18} className="text-accent" />
                {t("languages")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 bg-background rounded-md text-sm text-text-secondary border border-border"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="p-6 h-full" hover={false}>
              <h3 className="text-base font-bold mb-4 flex items-center gap-3 text-text-primary">
                <Layers size={18} className="text-accent" />
                {t("techStack")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStackItems.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-background rounded-md text-sm text-text-secondary border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="p-6 h-full" hover={false}>
              <h3 className="text-base font-bold mb-4 flex items-center gap-3 text-text-primary">
                <Languages size={18} className="text-accent" />
                {t("spokenLanguages")}
              </h3>
              <div className="space-y-4">
                {spoken.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-text-secondary">{lang.name}</span>
                      <span className="text-accent font-medium">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-accent h-1.5 rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
