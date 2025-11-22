"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  LogOut,
  LayoutDashboard,
  Calendar,
  ShieldCheck,
  Settings,
  KeyRound,
  Bell,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for user session
    const storedEmail = localStorage.getItem("userEmail");
    if (!storedEmail) {
      // Redirect to login if no session
      router.push("/login");
    } else {
      setEmail(storedEmail);
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <LayoutDashboard className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-slate-800 hidden md:block">
            User Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200">
            <div className="bg-indigo-100 p-1.5 rounded-full">
              <User className="w-4 h-4 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-slate-700 hidden sm:block pr-2">
              {email}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            title="Logout"
            className="text-slate-500 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="bg-linear-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-indigo-100 bg-white/10 w-fit px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Login Successful</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
            <p className="text-indigo-100 max-w-xl text-lg">
              You are logged in as{" "}
              <span className="font-semibold text-white">{email}</span>.
            </p>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl"></div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dashboard / Stats */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-indigo-600" />
                Overview
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">
                    Account Status
                  </CardTitle>
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-800">
                    Active
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Your account is fully verified
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">
                    Member Since
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-800">
                    20 Nov, 2024
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Registration Date
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mock Activity Section */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="bg-slate-100 p-2 rounded-full">
                        <Bell className="w-4 h-4 text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          System Notification
                        </p>
                        <p className="text-xs text-slate-500">
                          Your account was accessed successfully.
                        </p>
                      </div>
                      <span className="ml-auto text-xs text-slate-400">
                        Just now
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Settings className="w-5 h-5 text-indigo-600" />
              Quick Actions
            </h3>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors"
                >
                  <User className="w-4 h-4 mr-3 text-slate-500" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Update Profile</span>
                    <span className="text-xs text-slate-400 font-normal">
                      Change your details
                    </span>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors"
                >
                  <KeyRound className="w-4 h-4 mr-3 text-slate-500" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Change Password</span>
                    <span className="text-xs text-slate-400 font-normal">
                      Update security
                    </span>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors"
                >
                  <Bell className="w-4 h-4 mr-3 text-slate-500" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Notifications</span>
                    <span className="text-xs text-slate-400 font-normal">
                      Manage alerts
                    </span>
                  </div>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-slate-800 to-slate-900 text-white border-none shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Need Assistance?</h4>
                <p className="text-sm text-slate-300 mb-4">
                  Our support team is available 24/7 to help you with any
                  issues.
                </p>
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white border-none">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
