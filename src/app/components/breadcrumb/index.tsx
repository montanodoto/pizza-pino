function Breadcrumb({ title, href }: any) {
  return (
    <div className="container">
      <ul className="list--breadcrumbs">
        <li className="list--breadcrumbs__crumb">
          <a
            href="/"
            title="Gino's Pizza Inc."
            className="list--breadcrumbs__crumb__link"
          >
            Gino&apos;s Pizza Inc.
          </a>
        </li>
        <li className="list--breadcrumbs__crumb">
          <a
            href={href}
            title={title}
            className="list--breadcrumbs__crumb__link"
          >
            {title}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumb;
