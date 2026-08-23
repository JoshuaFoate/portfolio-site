import { Mail } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6">
            <h1 className="text-5xl font-bold">Joshua Foate</h1>
            <p className="text-xl mt-2">Software Engineer currently living in Austin, TX.</p>
            <a
                href="mailto:joshuafoate@gmail.com"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background w-fit font-medium"
            >
                <Mail size={18} />
                Contact me!
            </a>
        </section>
    );
}