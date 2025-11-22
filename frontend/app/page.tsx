import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShieldCheck, Zap, Layout } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 max-w-3xl">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-cyan-600">
            IA06 - User Registration API
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A complete demonstration of user registration flow with Next.js 14,
            React Query, and modern UI/UX principles.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 text-lg shadow-lg shadow-indigo-200"
          >
            <Link href="/register">Get Started - Register</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 text-lg"
          >
            <Link href="/login">Already have an account?</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <FeatureCard
          icon={<Layout className="h-8 w-8 text-indigo-500" />}
          title="Clean UI"
          description="Built with shadcn/ui and Tailwind CSS for a polished look."
        />
        <FeatureCard
          icon={<ShieldCheck className="h-8 w-8 text-green-500" />}
          title="Form Validation"
          description="Robust client-side validation using react-hook-form."
        />
        <FeatureCard
          icon={<Zap className="h-8 w-8 text-yellow-500" />}
          title="React Query"
          description="Optimized server state management and caching."
        />
        <FeatureCard
          icon={<Globe className="h-8 w-8 text-cyan-500" />}
          title="Responsive"
          description="Fully adaptive layout for mobile, tablet, and desktop."
        />
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-500">{description}</p>
      </CardContent>
    </Card>
  );
}
