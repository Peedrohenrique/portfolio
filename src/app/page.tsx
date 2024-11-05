"use client"
import * as React from "react"
import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Education } from "@/components/education";
import { Skill } from "@/components/skill";
import { Contact } from "@/components/contact";

export default function Home() {
  const BLUR_FADE_DELAY = 0.04;
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Header delay={BLUR_FADE_DELAY} />
      <About delay={BLUR_FADE_DELAY} />
      <Work delay={BLUR_FADE_DELAY} />
      <Education delay={BLUR_FADE_DELAY} />
      <Skill delay={BLUR_FADE_DELAY} />
      <Contact daley={BLUR_FADE_DELAY} />
    </main>
  );
}