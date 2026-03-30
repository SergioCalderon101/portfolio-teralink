"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as Array<{
    role: string;
    company: string;
    period: string;
    bullets: string[];
  }>;

  return (
    <section id="experience" className="py-24 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionHeading title={t("title")} />
        </FadeIn>

        <div className="relative border-l border-border ml-3 space-y-12">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative pl-8">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-background border-2 border-text-muted" />

                <div className="bg-surface p-6 rounded-lg border border-border">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">
                        {item.role}
                      </h3>
                      <p className="text-text-muted text-sm">{item.company}</p>
                    </div>
                    <span className="text-xs font-mono text-accent mt-2 md:mt-0 border border-accent/20 bg-accent/5 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>

                  <StaggerChildren className="space-y-3">
                    {item.bullets.map((bullet, j) => (
                      <StaggerItem
                        key={j}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <Check
                          size={12}
                          className="text-accent mt-1 shrink-0"
                        />
                        <span>{bullet}</span>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
