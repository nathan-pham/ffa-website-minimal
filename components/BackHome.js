import Link from "next/link";

export default function BackHome() {
    return (
        <Link href="/">
            <a className="hover:underline fixed left-16 top-6 z-50">← Back to Home</a>
        </Link>
    );
}
