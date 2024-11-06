'use client'
import { useEffect, useState } from "react";
import BlurFade from "./ui/blur-fade";
import { RepositoryCard } from "./repository-card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "./icons";
import { IRepository } from "@/interfaces/IRepository";
import { getLanguageIcon } from "@/data/get-language-icon";
import NumberTicker from "./ui/number-ticker";

export function Repository({ daley }: { daley: number }) {
    const [repositories, setRepositories] = useState<IRepository[]>([]);
    const avatarUrl = "https://avatars.githubusercontent.com/u/80182753?v=4";
    const [visibleRepos, setVisibleRepos] = useState<number>(5); // Número de repositórios visíveis inicialmente

    useEffect(() => {
        async function fetchRepositories() {
            try {
                const repoResponse = await fetch("https://api.github.com/users/peedrohenrique/repos", {
                    headers: {
                        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                    },
                });

                if (!repoResponse.ok) {
                    throw new Error("Erro ao buscar repositórios");
                }

                let data: IRepository[] = await repoResponse.json();

                data = data.sort(
                    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                );

                const reposWithLanguages = await Promise.all(
                    data.map(async (repo) => {
                        const languagesResponse = await fetch(repo.languages_url, {
                            headers: {
                                Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                            },
                        });

                        if (!languagesResponse.ok) {
                            throw new Error(`Erro ao buscar linguagens para o repositório ${repo.name}`);
                        }

                        const languagesData = await languagesResponse.json();
                        return { ...repo, languages: Object.keys(languagesData) };
                    })
                );

                setRepositories(reposWithLanguages);
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        }
        fetchRepositories();
    }, []);

    const loadMoreRepos = () => {
        setVisibleRepos((prev) => prev + 5);
    };

    return (
        <section id="repositories">
            <div className="space-y-12 py-12">
                <BlurFade delay={daley * 13}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Repositórios GitHub
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Explore meus projetos no GitHub
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Abaixo estão alguns dos meus repositórios públicos no GitHub, onde compartilho projetos que venho desenvolvendo e aprimorando.
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <div className="space-y-1">
                    <div className="flex flex-row-reverse items-center justify-between">
                        <Badge className=" bg-foreground text-background gap-1">
                            <NumberTicker className="text-white dark:text-black" value={repositories.length} />
                            Repositórios
                            <Icons.github className="h-4 w-4" />
                        </Badge>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <BlurFade delay={daley * 14}>
                            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                                {repositories.slice(0, visibleRepos).map((repo) => (
                                    <BlurFade key={repo.id} delay={daley * 15}>
                                        <RepositoryCard
                                            title={repo.name}
                                            description={repo.description || "Sem descrição disponível."}
                                            dates={new Date(repo.created_at).toLocaleDateString("pt-BR", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                            location={(<div className="flex gap-1">Acesse repositório<Icons.github className="h-3 w-3" /></div>)}
                                            image={avatarUrl}
                                            hrefRepo={repo.html_url}
                                            links={[
                                                ...repo.languages.map((language) => ({
                                                    title: language,
                                                    href: "#",
                                                    icon: getLanguageIcon(language),
                                                })),
                                            ]}
                                        />
                                    </BlurFade>
                                ))}
                            </ul>
                        </BlurFade>

                        {repositories.length > visibleRepos && (
                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={loadMoreRepos}
                                    className="bg-primary text-sm text-background px-6 py-2 rounded-full hover:bg-primary/80 transition"
                                >
                                    Ver mais
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
