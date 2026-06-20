import { createFileRoute } from "@tanstack/react-router";
import { NewsroomPage } from "@/components/news-pages";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News | Stratos Group" },
      {
        name: "description",
        content: "Latest Stratos blog posts and corporate briefings.",
      },
    ],
  }),
  component: NewsroomPage,
});
