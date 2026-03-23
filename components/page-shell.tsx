import Breadcrumbs from "@/components/breadcrumbs";

type Crumb = {
  label: string;
  href?: string;
};

export default function PageShell({
  children,
  breadcrumbs,
}: {
  children: React.ReactNode;
  breadcrumbs?: Crumb[];
}) {
  return (
    <>
      {breadcrumbs ? (
        <div className="mx-auto max-w-7xl px-8 pt-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      ) : null}

      {children}
    </>
  );
}
