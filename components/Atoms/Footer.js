export default function Footer() {
    const Link = ({ href, children }) => (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black text-gray-500 transition-color font-xl"
        >
            {children}
        </a>
    );

    // prettier-ignore
    return (
        <footer className="py-12 text-center flex items-center gap-4 justify-center">
            <Link href="https://www.instagram.com/deloroffa_">Instagram</Link> • <Link href="https://www.facebook.com/deloroloomisffa">Facebook</Link> • <Link href="https://www.remind.com/join/deloroffa">Remind</Link>
        </footer>
    );
}
