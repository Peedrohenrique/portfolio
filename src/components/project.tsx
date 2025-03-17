import { DATA } from "@/data/resume";
import BlurFade from "./ui/blur-fade";
import { ProjectCard } from "./project-card";

export function Project({ delay }: { delay: number }) {
    return (
        <section id="projects">
            <div className="space-y-12 w-full py-12">
                <BlurFade delay={delay * 11}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Meus Projetos
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Confira meus últimos trabalhos
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Trabalhei em uma variedade de projetos, de sites simples a aplicativos web complexos. Aqui estão alguns dos meus favoritos.
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={delay * 12 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
