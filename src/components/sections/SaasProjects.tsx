"use client";

import { useTranslations } from "next-intl";
import { Brain, ExternalLink, Mail } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function SaasProjects() {
  const t = useTranslations("saas");
  const projects = t.raw("projects") as Array<{
    name: string;
    url: string;
    description: string;
    tags: string[];
  }>;

  return (
    <section id="saas-projects" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading title={t("title")} />
          <div className="flex items-center justify-center gap-3 -mt-12 mb-4">
            <Brain size={20} className="text-accent" />
            <span className="text-lg font-semibold text-text-secondary">
              {t("brand")}
            </span>
          </div>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
            {t("description")}
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <Card className="p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-text-primary">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center mt-12">
          <p className="text-text-muted text-sm mb-4">{t("cta")}</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#contact");
              if (el) {
                window.scrollTo({
                  top: (el as HTMLElement).offsetTop - 64,
                  behavior: "smooth",
                });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            <Mail size={16} />
            {t("ctaButton")}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
