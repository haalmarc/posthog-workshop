import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="font-medium text-primary">
          {role}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
}
