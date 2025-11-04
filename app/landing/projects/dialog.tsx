"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export function ProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <div>
          <CldVideoPlayer
            width="1920"
            height="1080"
            src="hearthub-solutions_wnqjem"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
