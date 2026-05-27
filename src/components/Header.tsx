import { IconLogo } from "@/components/ui/custom";
import { ROUTES, getNavLinks } from "@/configs/routes.config";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, matchPath, useLocation } from "react-router-dom";

export const Header = () => {
  const { t } = useTranslation("header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentRoute = useMemo(() => {
    return ROUTES.find((route) =>
      matchPath({ path: route.path, end: true }, location.pathname),
    );
  }, [location.pathname]);

  const shouldShowHeader = currentRoute?.nav !== false;

  const navLinks = useMemo(() => {
    return getNavLinks(ROUTES).filter((link) => link.to !== "/build-with-me");
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return !!matchPath({ path, end: path !== "/" }, location.pathname);
  };

  if (!shouldShowHeader) {
    return null;
  }

  return (
    <header className="sticky top-4 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 border-b lg:px-8">
        <IconLogo />

        <div>
          <Link
            to="/build-with-me"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {t("cta_button")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};
