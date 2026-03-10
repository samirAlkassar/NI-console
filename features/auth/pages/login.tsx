import { AuthBranding } from "@/features/auth/login/components/login-branding-splash";
import LoginCard from "../login/components/auth-card";

export default function LoginPage() {
  return (
    <main className="h-screen flex items-center justify-center bg-muted">
      <div className="grid md:grid-cols-2 min-w-95.75">
        <LoginCard />
        <AuthBranding />
      </div>
    </main>
  );
}
