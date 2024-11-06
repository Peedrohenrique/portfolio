import { Icons } from "@/components/icons";


export const getLanguageIcon = (language: any) => {
    switch (language.toLowerCase()) {
        case "javascript":
            return <Icons.javascript className="h-4 w-4" />;

        case "html":
            return <Icons.html className="h-4 w-4" />;
        case "css":
            return <Icons.css className="h-4 w-4" />;
        case "typescript":
            return <Icons.typescript className="h-4 w-4" />;
        case "nextjs":
            return <Icons.typescript className="h-4 w-4" />;
        case "dockerfile":
            return <Icons.dockerfile className="h-4 w-4" />;
        case "html":
            return <Icons.html className="h-4 w-4" />;
        // Adicione mais casos conforme necessário
        default:
            return <span>💻</span>; // Ícone padrão para linguagens não especificadas
    }
};