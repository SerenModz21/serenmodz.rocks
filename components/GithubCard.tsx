import ExternalLink from "./ExternalLink";

export default function GithubCard(props: GithubCardProps) {
  return (
    <div className="card w-full bg-base-100 shadow-xl transition-all ease-in-out hover:scale-105 hover:brightness-105 rounded-box">
    <ExternalLink href={props.url} className="card-body">
      <h2 className="card-title justify-between">
        {props.name}
        <div className="space-x-2">
          {props.fork && <div className="badge badge-outline">fork</div>}
          {props.archived && <div className="badge badge-outline">archived</div>}
        </div>
      </h2>
      <p>
        {props.description ??
          "No description, website, or topics provided."}
      </p>
      <div className="card-actions justify-between">
        <span className="text-sm text-gray-400">{props.language ?? ""}</span>
        {/* <span className="text-sm text-gray-400">⭐ {props.stars ?? 0}</span> */}
      </div>
    </ExternalLink>
  </div>
  )
}

interface GithubCardProps {
  url: string;
  name: string;
  description?: string;
  fork?: boolean;
  archived?: boolean;
  language?: string;
}
