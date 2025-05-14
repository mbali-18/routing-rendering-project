import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lip/news";

export default function FilteredNewsPage(params) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
}
