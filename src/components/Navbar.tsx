const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-background border-b border-foreground/50">
            <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                <ul className="flex gap-6">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.label}</a>
                        </li>
                    ))}
                </ul>
                <a
                    href="mailto:joshuafoate@gmail.com"
                    className="px-4 py-2 rounded-full bg-black text-white"
                >
                    Contact me
                </a>
            </nav>
        </header>
    );
}