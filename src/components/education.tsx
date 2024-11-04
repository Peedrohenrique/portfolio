import { DATA } from "@/data/resume";
import { ResumeCard } from "./resume-card";
import BlurFade from "./ui/blur-fade";

export function Education({ delay }: { delay: number }) {
    return (
        <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={delay * 7}>
                    <h2 className="text-xl font-bold">Educação</h2>
                </BlurFade>
                {DATA.education.map((education, id) => (
                    <BlurFade
                        key={education.school}
                        delay={delay * 8 + id * 0.05}
                    >
                        <ResumeCard
                            key={education.school}
                            href={education.href}
                            logoUrl={education.logoUrl}
                            altText={education.school}
                            title={education.school}
                            subtitle={education.degree}
                            period={`${education.start} - ${education.end}`}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
