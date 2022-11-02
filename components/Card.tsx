import ExternalLink from "./ExternalLink";

export default function Card(props: CardProps) {
  return (
    <div className="w-fill card rounded-box bg-base-100 shadow-xl transition-all ease-in-out hover:scale-105 hover:brightness-105">
      <ExternalLink href={props.url} className="card-body">
        <h2 className="card-title justify-between">{props.name}</h2>
        <p>
          {props.description ?? "No description, website, or topics provided."}
        </p>
      </ExternalLink>
    </div>
  );
}

interface CardProps {
  url: string;
  name: string;
  description?: string;
}
