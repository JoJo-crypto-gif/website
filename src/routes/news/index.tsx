import { createFileRoute } from "@tanstack/react-router";
import { NewsroomPage } from "@/components/news-pages";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News | Lucid Aviation" },
      {
        name: "description",
        content: "Latest Lucid Aviation blog posts and corporate briefings.",
      },
    ],
  }),
  component: NewsroomPage,
});
