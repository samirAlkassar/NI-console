import Image from "next/image"

export function AuthBranding() {
  return (
    <div className="min-w-95.75 bg-login-slash hidden md:flex items-center justify-center relative">
      <Image
        src="/brand/NI-logo-full.svg"
        alt="NI Logo"
        width={200}
        height={60}
        priority
      />

      <div className="absolute bottom-0 w-full h-[153px]">
        <Image
          src="/images/IMG_7517 1.svg"
          alt="Earth splash"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}