import { createFileRoute } from "@tanstack/react-router";
import { CareerDetailPage } from "@/components/career-pages";

export const Route = createFileRoute("/careers/$slug")({
  head: () => ({
    meta: [
      { title: "Career Opportunity | Lucid Aviation" },
      {
        name: "description",
        content: "Explore this career opportunity and apply to join Lucid Aviation.",
      },
    ],
  }),
  component: CareerDetailRoute,
});

function CareerDetailRoute() {
  const { slug } = Route.useParams();
  return <CareerDetailPage slug={slug} />;
}
