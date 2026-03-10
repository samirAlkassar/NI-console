import Image from "next/image";

export default function Branding() {
    return (
        <nav>
            <div className="min-w-95.75 bg-login-slash flex items-center justify-center relative">
                <Image
                src="/brand/NI-logo-full.svg"
                alt="NI Logo"
                width={200}
                height={60}
                priority
                />
            </div>
        </nav>
    )
}