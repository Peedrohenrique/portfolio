import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import BlurFade from "./ui/blur-fade";

export function Skill({delay} : {delay: number}) {
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={delay * 9}>
                    <h2 className="text-xl font-bold">Habilidade</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                    {DATA.skills.map((skill, id) => (
                        <BlurFade key={skill} delay={delay * 10 + id * 0.05}>
                            <Badge key={skill}>{skill}</Badge>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
