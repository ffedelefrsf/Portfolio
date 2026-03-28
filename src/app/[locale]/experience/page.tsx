import { getTranslations } from "next-intl/server";
import { technologies } from "@/cross-site/ui/technologies";
import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { Params } from "../types";
import { EXPERIENCE_ENTRIES } from "./data";
import { TRANSLATION_NAME } from "./translation/config";

export default async function ExperiencePage({ params }: Params) {
  await initializeI18N(params);
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <section className={cn("px-4", "py-12", "sm:px-6", "lg:px-8")}>
      {/* Header */}
      <div className={cn("mb-16", "max-w-2xl")}>
        <h1
          className={cn(
            "mb-4",
            "text-4xl",
            "font-bold",
            "tracking-tight",
            "text-foreground",
            "sm:text-5xl",
          )}
        >
          {t("title")}
        </h1>
        <p className={cn("text-lg", "text-muted")}>{t("subtitle")}</p>
      </div>

      {/* Timeline */}
      <div className={cn("relative", "max-w-4xl")}>
        {/* Vertical line */}
        <div
          className={cn(
            "absolute",
            "bottom-0",
            "left-2.75",
            "top-6",
            "w-0.5",
            "bg-border",
          )}
        />

        <div className={cn("space-y-0")}>
          {EXPERIENCE_ENTRIES.map((entry) => {
            const isPresent = entry.period.end === null;

            return (
              <div
                key={entry.id}
                className={cn("relative", "pb-12", "pl-10", "last:pb-0")}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute",
                    "left-0",
                    "top-1",
                    "flex",
                    "size-5.5",
                    "items-center",
                    "justify-center",
                    "rounded-full",
                    "border-2",
                    "bg-background",
                    {
                      "border-primary": isPresent,
                      "border-border": !isPresent,
                    },
                  )}
                >
                  {isPresent && (
                    <span
                      className={cn(
                        "size-2",
                        "animate-pulse",
                        "rounded-full",
                        "bg-primary",
                      )}
                    />
                  )}
                </div>

                <div
                  className={cn(
                    "rounded-xl",
                    "border",
                    "border-border",
                    "bg-card",
                    "p-5",
                    "shadow-sm",
                    "sm:p-6",
                  )}
                >
                  <div
                    className={cn(
                      "mb-4",
                      "flex",
                      "flex-col",
                      "gap-2",
                      "sm:flex-row",
                      "sm:items-start",
                      "sm:justify-between",
                    )}
                  >
                    <div>
                      <h2
                        className={cn(
                          "text-xl",
                          "font-bold",
                          "text-foreground",
                        )}
                      >
                        {entry.company}
                      </h2>
                      <p
                        className={cn(
                          "mt-0.5",
                          "text-sm",
                          "font-medium",
                          "text-muted",
                        )}
                      >
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {t(`entries.${entry.id}.role` as any)} &middot;{" "}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {t(`workTypes.${entry.workType}` as any)}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "flex",
                        "shrink-0",
                        "flex-wrap",
                        "items-center",
                        "gap-2",
                      )}
                    >
                      <span
                        className={cn(
                          "whitespace-nowrap",
                          "text-sm",
                          "text-muted",
                        )}
                      >
                        {entry.period.start} –{" "}
                        {entry.period.end ?? t("present")}
                      </span>
                      {isPresent && (
                        <span
                          className={cn(
                            "inline-flex",
                            "items-center",
                            "gap-1.5",
                            "rounded-full",
                            "border",
                            "border-primary-200",
                            "bg-primary-50",
                            "px-2.5",
                            "py-0.5",
                            "text-xs",
                            "font-medium",
                            "text-primary-700",
                            "dark:border-primary-800",
                            "dark:bg-primary-950/60",
                            "dark:text-primary-400",
                          )}
                        >
                          <span
                            className={cn(
                              "size-1.5",
                              "animate-pulse",
                              "rounded-full",
                              "bg-primary-500",
                            )}
                          />
                          {t("present")}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Client note */}
                  {entry.hasClient && (
                    <p
                      className={cn("mb-4", "text-sm", "italic", "text-muted")}
                    >
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {t(`entries.${entry.id}.client` as any)}
                    </p>
                  )}

                  {/* Highlights layout */}
                  {entry.layout === "highlights" && (
                    <ul className={cn("mb-4", "space-y-2")}>
                      {(
                        t.raw(`entries.${entry.id}.highlights`) as string[]
                      ).map((highlight, i) => (
                        <li
                          key={i}
                          className={cn(
                            "flex",
                            "items-start",
                            "gap-2",
                            "text-sm",
                            "leading-relaxed",
                            "text-muted",
                          )}
                        >
                          <span
                            className={cn(
                              "mt-1.5",
                              "size-1.5",
                              "shrink-0",
                              "rounded-full",
                              "bg-primary-400",
                            )}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Projects layout */}
                  {entry.layout === "projects" && (
                    <div className={cn("mb-4")}>
                      <p
                        className={cn(
                          "mb-5",
                          "text-sm",
                          "leading-relaxed",
                          "text-muted",
                        )}
                      >
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {t(`entries.${entry.id}.description` as any)}
                      </p>
                      <p
                        className={cn(
                          "mb-3",
                          "text-xs",
                          "font-bold",
                          "uppercase",
                          "tracking-widest",
                          "text-muted",
                        )}
                      >
                        {t("projects")}
                      </p>
                      <div
                        className={cn(
                          "grid",
                          "grid-cols-1",
                          "gap-3",
                          "sm:grid-cols-2",
                          "lg:grid-cols-3",
                        )}
                      >
                        {entry.projects?.map((project) => (
                          <div
                            key={project.id}
                            className={cn(
                              "rounded-lg",
                              "border",
                              "border-border",
                              "bg-background",
                              "p-4",
                            )}
                          >
                            <h3
                              className={cn(
                                "mb-1.5",
                                "text-sm",
                                "font-semibold",
                                "text-foreground",
                              )}
                            >
                              {project.name}
                            </h3>
                            <p
                              className={cn(
                                "mb-3",
                                "text-xs",
                                "leading-relaxed",
                                "text-muted",
                              )}
                            >
                              {t(
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                `entries.${entry.id}.projects.${project.id}` as any,
                              )}
                            </p>
                            <div className={cn("flex", "flex-wrap", "gap-1")}>
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className={cn(
                                    "rounded",
                                    "bg-muted",
                                    "px-1.5",
                                    "py-0.5",
                                    "text-[10px]",
                                    "font-medium",
                                    "text-muted-foreground",
                                  )}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div
                    className={cn(
                      "mt-4",
                      "flex",
                      "flex-wrap",
                      "gap-1.5",
                      "border-t",
                      "border-border",
                      "pt-4",
                    )}
                  >
                    {entry.tech.map((tech) => {
                      const existingTech = technologies[tech];
                      const Icon = existingTech?.component;
                      return (
                        <span
                          key={tech}
                          className={cn(
                            "inline-flex",
                            "items-center",
                            "gap-1.5",
                            "rounded-md",
                            "border",
                            "border-border",
                            "bg-muted/50",
                            "px-2",
                            "py-0.5",
                            "font-mono",
                            "text-xs",
                            "text-foreground",
                          )}
                        >
                          {Icon && (
                            <Icon
                              aria-hidden
                              width={12}
                              height={12}
                              className={cn(
                                "size-3",
                                "shrink-0",
                                "object-contain",
                                {
                                  invert: existingTech?.shouldInvertOnLight,
                                  "dark:invert-0":
                                    existingTech?.shouldInvertOnLight,
                                },
                              )}
                            />
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
