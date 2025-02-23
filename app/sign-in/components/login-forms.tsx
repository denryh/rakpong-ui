import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <div className="grid gap-8 my-4">
      <div className="grid gap-1">
        <span className="text-sm font-semibold">Email</span>
        <Input />
      </div>

      <div className="grid gap-1">
        <span className="text-sm font-semibold">Password</span>
        <Input />
      </div>

      <Button>Login</Button>
    </div>
  );
}
