import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact | Stratos Group" },
      {
        name: "description",
        content: "Contact Stratos Group for partnerships, media, careers, and business inquiries.",
      },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const { service } = Route.useSearch();
  return <ContactPage service={service} />;
}
