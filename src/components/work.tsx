import { DATA } from "@/data/resume";
import BlurFade from "./ui/blur-fade";
import { ResumeCard } from "./resume-card";

export function Work({ delay }: { delay: number }) {
    return (
        <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={delay * 5}>
                    <h2 className="text-xl font-bold">Experiência Profissional</h2>
                </BlurFade>
                {DATA.work.map((work, id) => (
                    <BlurFade
                        key={work.company}
                        delay={delay * 6 + id * 0.05}
                    >
                        <ResumeCard
                            key={work.company}
                            logoUrl={work.logoUrl}
                            altText={work.company}
                            title={work.company}
                            subtitle={work.title}
                            href={work.href}
                            badges={work.badges}
                            period={`${work.start} - ${work.end ?? "o momento"}`}
                            description={work.description}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}