"use client";

import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/Icons";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Contact() {
  const t = useTranslations("contact");

  const contactItems = [
    {
      icon: MapPin,
      title: t("location"),
      value: t("locationValue"),
    },
    {
      icon: LinkedInIcon,
      title: t("linkedin"),
      value: t("linkedinValue"),
      href: "https://www.linkedin.com/in/sergio-calderon-sanpedro/",
    },
    {
      icon: GitHubIcon,
      title: t("github"),
      value: t("githubValue"),
      href: "https://github.com/SergioCalderon101",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionHeading
            title={t("title")}
            subtitle={t("description")}
          />
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <Card className="p-6 text-center h-full">
                <Icon size={28} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-sm text-text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-text-muted text-xs">{item.value}</p>
              </Card>
            );

            return (
              <StaggerItem key={item.title}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
