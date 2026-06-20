import { createFileRoute } from "@tanstack/react-router";
import { CareerDetailPage } from "@/components/career-pages";

export const Route = createFileRoute("/careers/$slug")({
  head: () => ({
    meta: [
      { title: "Career Opportunity | Stratos Group" },
      {
        name: "description",
        content: "Explore this career opportunity and apply to join Stratos Group.",
      },
    ],
  }),
  component: CareerDetailRoute,
});

function CareerDetailRoute() {
  const { slug } = Route.useParams();
  return <CareerDetailPage slug={slug} />;
}
