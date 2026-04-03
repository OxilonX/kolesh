"use client";
//shadcn imports
import { Button } from "@/components/ui/button";
//icons imports
import { IconLogout } from "@tabler/icons-react";
//better auth imports
import { signOut } from "@/lib/auth-client";
const LogoutBtn = () => {
  return (
    <div>
      <Button
        onClick={() => signOut()}
        variant={"destructive"}
        className="hover:bg-destructive/80"
      >
        <IconLogout /> Logout
      </Button>
    </div>
  );
};

export default LogoutBtn;
