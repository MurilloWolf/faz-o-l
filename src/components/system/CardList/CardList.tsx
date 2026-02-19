import Link from "next/link";
import { Card, CardHeader, CardFooter } from "../../ui";
import data, { type Notice } from "@/lib/data/notices";
export default function CardList() {
  function sortAndFormatNotices(notices: Notice[]) {
    const sortedNotices = notices.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return sortedNotices.map((notice) => {
      const [month, day, year] = notice.date.split("-");
      const formattedDate = `${day}-${month}-${year}`;
      return { ...notice, date: formattedDate };
    });
  }
  const sortedData = sortAndFormatNotices(data);

  return (
    <div className="p-4 md:p-2 flex flex-col md:flex-row md:flex-wrap w-full gap-6 md:gap-4 md:w-full md:items-center md:justify-center">
      {sortedData.map((news) => {
        return (
          <Card
            key={news.title}
            className="md:w-1/5 lg:w-1/6 min-w-[200px] md:min-h-[200px] h-full hover:transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-between"
          >
            <CardHeader className="p-3 md:text-sm ">
              <h2 dangerouslySetInnerHTML={{ __html: news.title }}></h2>
              <time className="text-xs font-thin">{news.date}</time>
            </CardHeader>
            <CardFooter className="w-full p-2 h-full bg-gray-100/80 flex flex-col items-center justify-center ">
              <Link
                href={news.link}
                target="_blank"
                className="text-xs h-full font-normal underline "
              >
                {news.linkText}
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
