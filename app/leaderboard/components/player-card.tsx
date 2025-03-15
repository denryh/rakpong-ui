import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PlayerCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>John Doe</span>
        </CardTitle>
        <CardDescription>Top 1</CardDescription>
      </CardHeader>
    </Card>
  );
}
