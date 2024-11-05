'use client';

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import BlurFade from "./ui/blur-fade";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

export function Contact({ daley }: { daley: number }) {
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "O nome deve ter pelo menos 2 caracteres.",
        }),
        email: z
            .string()
            .min(1, { message: "Por favor, insira seu endereço de e-mail." })
            .email({ message: "Insira um endereço de e-mail válido." }),
        subject: z.string().min(1, { message: "Por favor, insira um assunto." }),
        Message: z.string().min(1, { message: "Por favor, insira uma mensagem." }),
    });

    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            Message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);

        const templateParams = {
            to_name: 'Pedro Henrique',
            from_name: values.name,
            subject: values.subject,
            email: values.email,
            message: values.Message
        };

        const serviceID = process.env.SERVICE_ID as string;
        const templateID = process.env.TEMPLATE_ID as string;
        const publicKey = process.env.KEY as string;


        await emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((_res) => {
                toast({
                    title: "E-mail enviado! ✅",
                    description: "Seu e-mail foi enviado com sucesso!",
                });
                setLoading(false);
            })
            .catch((_err) => {
                toast({
                    variant: "destructive",
                    title: "Erro",
                    description: "Erro ao enviar e-mail.",
                });
                setLoading(false);
            });

        form.reset();
    }

    return (
        <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 md:px-6 w-full py-12">
                <BlurFade delay={daley * 16}>
                    <div className=" flex flex-col gap-5">
                        <div className="space-y-3 text-center">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Contato
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Entre em contato
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Gostou do que viu? Envie uma mensagem por e-mail, e responderei o mais breve possível. Vamos conversar sobre como posso contribuir para o sucesso do seu próximo projeto!
                            </p>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="flex gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-left">Nome</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Nome" {...field} className="w-full" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-left">E-mail</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="E-mail" {...field} className="w-full" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-left">Assunto</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Assunto" {...field} className="w-full" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="Message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-left">Mensagem</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Sua mensagem..." {...field} className="w-full" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button type="submit" className="w-full shadow-lg">
                                    {loading ? (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    ) : (
                                        'Enviar'
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
