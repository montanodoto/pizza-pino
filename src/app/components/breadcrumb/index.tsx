import "./index.css";

type Breadcrumb_Props = {
  breadcrumb_items: { title: string; href?: string }[];
};

function Breadcrumb({ breadcrumb_items }: Breadcrumb_Props) {
  return (
    <div className="container">
      <ul className={`list--breadcrumbs gap-3`}>
        <li className="list--breadcrumbs__crumb grow">
          <a
            href="/"
            title="Gino's Pizza Inc."
            className="breadcrumb-link breadcrumb_chevron"
          >
            Gino&apos;s Pizza Inc.
          </a>
        </li>
        {breadcrumb_items.map(({ title, href }) => (
          <li className="list--breadcrumbs__crumb grow" key={title}>
            <a
              href={href}
              title={title}
              className="breadcrumb-link breadcrumb_chevron"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
