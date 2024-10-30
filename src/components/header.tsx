import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react"
import BlurFade from "./ui/blur-fade";
import BlurFadeText from "./ui/blur-fade-text";

export function Header({ delay }: { delay: number }) {
    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="flex justify-between gap-2">

                    <div className="flex-col flex flex-1 space-y-1.5">
                        <BlurFadeText
                            delay={delay}
                            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                            yOffset={8}
                            text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                        />
                        <BlurFadeText
                            className="max-w-[600px] md:text-xl"
                            delay={delay}
                            text={DATA.description}
                        />
                    </div>
                    <BlurFade delay={delay}>
                        <Avatar className="size-28 border">
                            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                            <AvatarFallback>{DATA.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}
