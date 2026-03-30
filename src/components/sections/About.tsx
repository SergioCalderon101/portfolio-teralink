"use client";

import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificationsToggle } from "./CertificationsToggle";

export function About() {
  const t = useTranslations("about");
  const courses = t.raw("courses") as string[];

  return (
    <section id="about" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading title={t("title")} />
        </FadeIn>

        <FadeIn>
          <p className="text-base leading-relaxed text-text-secondary text-center max-w-3xl mx-auto mb-16">
            {t("bio")}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            <div>
              <h3 className="text-xl font-bold mb-6 text-text-primary">
                {t("education")}
              </h3>
              <Card className="p-6 mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary">
                      {t("university")}
                    </h4>
                    <p className="text-accent text-sm font-medium">
                      {t("degree")}
                    </p>
                  </div>
                  <span className="text-xs text-text-muted">
                    {t("graduationYear")}
                  </span>
                </div>
                <p className="text-text-muted text-sm mb-3">
                  {t("universityLocation")}
                </p>
                <p className="text-sm text-text-secondary">
                  {t("educationDescription")}
                </p>
              </Card>

              <h4 className="font-semibold text-sm text-text-primary mb-3">
                {t("featuredCourses")}
              </h4>
              <StaggerChildren className="space-y-2">
                {courses.map((course) => (
                  <StaggerItem
                    key={course}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <CheckCircle size={14} className="text-accent shrink-0" />
                    {course}
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-6 text-text-primary">
                {t("certifications")}
              </h3>
              <CertificationsToggle />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
