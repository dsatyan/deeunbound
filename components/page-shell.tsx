import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteHeader />

      {breadcrumbs ? (
        <div className="mx-auto max-w-7xl px-8 pt-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      ) : null}

      {children}

      <SiteFooter />
    </div>
  );
}