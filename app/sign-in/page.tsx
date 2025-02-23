import Link from "next/link";
import LoginForm from "./components/login-forms";

export default function SignInPage() {
  return (
    <div className="grid place-items-center min-h-screen p-4">
      <div className="w-full">
        <Link href="/">&lt; Back to home</Link>
        <div className="bg-neutral-100/60 rounded p-8 w-full">
          <div className="grid gap-2">
            <h1 className="text-3xl font-display font-bold">RAKPONG 🏓</h1>
            <span className="text-xl font-semibold">Welcome back</span>
            <span>
              New here?{" "}
              <Link href="/create-account" className="font-bold underline">
                Create an account
              </Link>
            </span>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
