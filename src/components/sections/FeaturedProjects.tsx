"use client";

import { useTranslations } from "next-intl";
import { GitHubIcon } from "@/components/ui/Icons";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function FeaturedProjects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as Array<{
    name: string;
    github: string;
    description: string;
    tags: string[];
  }>;

  return (
    <section id="projects" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading title={t("title")} />
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project) => (
            <StaggerItem key={project.name}>
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-text-primary">
                    {project.name}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    <GitHubIcon size={16} />
                  </a>
                </div>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-1">
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
      </div>
    </section>
  );
}
