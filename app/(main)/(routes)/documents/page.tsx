"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useMutation } from 'convex/react';
import { api } from "@/convex/_generated/api";


import { PlusCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

type Props = {};

const Page = (props: Props) => {
  
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = ()=>{
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating note...",
      success: "Note created",
      error: "Failed to create note",
    })
  }

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
      <Button className="text-lg font-medium" onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default Page;
