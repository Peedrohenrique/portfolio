import { DATA } from "@/data/resume";
import BlurFade from "./ui/blur-fade";
import Markdown from "react-markdown";

export function About({ delay }: { delay: number }) {
    return (
        <section id="about">
            <BlurFade delay={delay * 3}>
                <h2 className="text-xl font-bold">Sobre</h2>
            </BlurFade>
            <BlurFade delay={delay * 4}>
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    {DATA.summary}
                </Markdown>
            </BlurFade>
        </section>
    );
}
