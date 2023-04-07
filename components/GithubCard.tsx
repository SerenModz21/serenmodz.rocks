import ExternalLink from "./ExternalLink";

export default function GithubCard(props: GithubCardProps) {
    return (
        <div className="card rounded-box w-full bg-base-100 shadow-xl transition-all ease-in-out hover:scale-105 hover:brightness-105">
            <ExternalLink href={props.url} className="card-body">
                <h2 className="card-title justify-between">
                    {props.name}
                    {props.archived && (
                        <div className="badge-outline badge">archived</div>
                    )}
                </h2>
                <p>
                    {props.description ??
                        "No description, website, or topics provided."}
                </p>
                <div className="card-actions">
                    <span className="text-sm font-light">
                        {props.language ?? ""}
                    </span>
                </div>
            </ExternalLink>
        </div>
    );
}

interface GithubCardProps {
    url: string;
    name: string;
    description?: string;
    archived?: boolean;
    language?: string;
}
