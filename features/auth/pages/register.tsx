import { AuthCard } from "../register/components/auth-card";
import { RegisterForm } from "../register/components/register-form";
import Branding from "../register/components/register-branding-splash";
import BrandHeader from "../components/brand-header";

export default function RegisterPage() {
  return (
    <main className="h-screen w-full">
      <div className="grid lg:grid-cols-2 h-screen">
        <div className="p-10 gap-6">
          <nav>
            <BrandHeader variant="sm"/>
          </nav>
          <AuthCard title="Create an account" description="Fill in the form below to create your account.">
            <RegisterForm />
          </AuthCard>
        </div>
        <div className="hidden lg:flex bg-login-slash items-center justify-center relative h-full">
          <Branding />
        </div>
      </div>
    </main>
  );
}