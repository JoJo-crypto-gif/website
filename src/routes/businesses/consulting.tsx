import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-pages";

export const Route = createFileRoute("/businesses/consulting")({
  head: () => ({
    meta: [
      { title: "Consulting | Stratos Group" },
      {
        name: "description",
        content: "Stratos Consulting advises aviation and industrial clients.",
      },
    ],
  }),
  component: () => <ServiceDetailPage slug="consulting" />,
});
