"use client"
import * as React from "react"
export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)] gap-3">
      <h1 className="text-6xl font-bold text-center sm:text-left">Pedro Portfólio</h1>

      <div className="flex gap-2">
        <span className="h-1  border-b border-gray-300"></span>
        <p className="text-sm text-center text-gray-500 border-b border-gray-500">Em breve</p>
      </div>
    </div>
  );
}