import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ProjectUX from "./project-ux";
import ProjectWeb from "./project-web";
import { TabsContent } from "@radix-ui/react-tabs";
import ProjectBrand from "./project-brand";

const Projects = () => {
  return (
    <div>
      <Tabs defaultValue="web">
        <div className="mb-4 flex justify-center">
          <TabsList className="bg-pricing-card flex h-11 justify-center rounded-full">
            <TabsTrigger value="web" className="cursor-pointer rounded-full">
              Website
            </TabsTrigger>
            <TabsTrigger value="ux" className="cursor-pointer rounded-full">
              UI/UX
            </TabsTrigger>
            <TabsTrigger value="brand" className="cursor-pointer rounded-full">
              Brand
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="web">
          <ProjectWeb />
        </TabsContent>
        <TabsContent value="ux">
          <ProjectUX />
        </TabsContent>
        <TabsContent value="brand">
          <ProjectBrand />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
