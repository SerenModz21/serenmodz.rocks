import ExternalLink from "@components/ExternalLink";
import useSWR from "swr";
// import fetcher from "@utils/fetcher";

export default function Home() {
  const { data } = useSWR<any[]>("https://api.github.com/users/SerenModz21/repos?per_page=100");
  if (!data) return <p>No data found</p>;

  return (
    <>
      <div className="mb-auto grid grid-cols-1 gap-4 self-center md:grid-cols-2 lg:grid-cols-3">
        {data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((it) => (
            <div
              key={it.id}
              className="card w-96 bg-base-100 shadow-xl transition-all ease-in-out hover:scale-105 hover:brightness-105"
            >
              <ExternalLink href={it.html_url} className="card-body">
                <h2 className="card-title justify-between">
                  {it.name}
                  <div className="space-x-2">
                    {it.fork && <div className="badge badge-outline">fork</div>}
                    {it.archived && (
                      <div className="badge badge-outline">archived</div>
                    )}
                  </div>
                </h2>
                <p>
                  {it.description ??
                    "No description, website, or topics provided."}
                </p>
                <div className="card-actions justify-between">
                  <span className="text-sm text-gray-500">{it.language}</span>
                  <span className="text-sm text-gray-400">
                    ⭐ {it.stargazers_count}
                  </span>
                </div>
              </ExternalLink>
            </div>
          ))}
      </div>
    </>
  );
}
