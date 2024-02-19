"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

type Props = {};

const page = (props: Props) => {
  const { user } = useUser();
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2>Welcome to {user?.firstName}&apos;s Notion</h2>
      <Button className="text-lg font-medium">
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default page;
