import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ServicesUX from "./services-ux";
import ServicesWeb from "./services-web";
import { TabsContent } from "@radix-ui/react-tabs";
import ServicesBrand from "./services-brand";

const Services = () => {
  return (
    <div>
      <Tabs defaultValue="web">
        <div className="mb-4 flex justify-center">
          <TabsList className="bg-pricing-card flex h-11 justify-center rounded-full">
            <TabsTrigger value="web" className="cursor-pointer rounded-full">
              Website Design
            </TabsTrigger>
            <TabsTrigger value="ux" className="cursor-pointer rounded-full">
              UI/UX Design
            </TabsTrigger>
            <TabsTrigger value="brand" className="cursor-pointer rounded-full">
              Brand Design
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="web">
          <ServicesWeb />
        </TabsContent>
        <TabsContent value="ux">
          <ServicesUX />
        </TabsContent>
        <TabsContent value="brand">
          <ServicesBrand />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Services;
