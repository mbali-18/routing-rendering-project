import Link from "next/link";
import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lip/news";

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter?.[0];

  const links = getAvailableNewsYears();
  const news = getNewsForYear(filter);

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <NewsList news={news} />
    </>
  );
}
