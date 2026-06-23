"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import menuData from "./menuData";
import { PrimaryLogo } from "@/components/molecules/logo";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  useEffect(() => {
    setNavigationOpen(false);
    setActiveDropdownIndex(null);
  }, [pathUrl]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (navigationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [navigationOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[999] w-full transition-all duration-300 ${
          stickyMenu
            ? "bg-white border-b border-gray-100 py-1.5 shadow-sm"
            : "bg-white border-b border-transparent py-3"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <PrimaryLogo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end gap-10">
            <nav>
              <ul className="flex items-center gap-5">
                {menuData.map((menuItem, key) => (
                  <li key={key} className="relative group">
                    {menuItem.submenu ? (
                      <div className="py-4">
                        <button
                          onClick={() => setActiveDropdownIndex(activeDropdownIndex === key ? null : key)}
                          className="flex items-center gap-1 text-[13px] font-semibold text-slate-600 hover:text-[#387467] transition-colors whitespace-nowrap"
                        >
                          {menuItem.title}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${activeDropdownIndex === key ? "rotate-180" : ""}`}
                          />
                        </button>
                        <ul
                          className={`absolute top-full left-0 min-w-[220px] rounded-xl bg-white border border-gray-100 shadow-lg p-1.5 flex-col gap-0.5 z-50 ${
                            activeDropdownIndex === key ? "flex" : "hidden group-hover:flex"
                          }`}
                        >
                          {menuItem.submenu.map((item, subKey) => (
                            <li key={subKey}>
                              <Link
                                href={item.path || "#"}
                                className="block rounded-lg px-3.5 py-2 text-[12.5px] font-medium text-slate-500 hover:bg-[#387467]/5 hover:text-[#387467] transition-all"
                                onClick={() => setActiveDropdownIndex(null)}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={menuItem.path || "#"}
                        className={`text-[13px] font-semibold transition-colors hover:text-[#387467] whitespace-nowrap ${
                          pathUrl === menuItem.path ? "text-[#387467]" : "text-slate-600"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Platform Access Buttons */}
            <div className="flex items-center gap-2">
              <a
                href="https://certify.truemarkglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-[#387467] px-4 py-2 text-[13px] font-bold text-[#387467] hover:bg-[#387467]/5 transition-all whitespace-nowrap"
              >
                CLMEP
              </a>
              <a
                href="https://app.truemarkglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-[#387467] px-4 py-2 text-[13px] font-bold text-white shadow-sm hover:bg-[#2d5e53] transition-all whitespace-nowrap"
              >
                Truvera
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-slate-600 focus:outline-none"
            onClick={() => setNavigationOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu — full-screen overlay */}
      <div
        className={`fixed inset-0 z-[1000] lg:hidden flex flex-col bg-white transition-transform duration-300 ease-in-out ${
          navigationOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
          <Link href="/" onClick={() => setNavigationOpen(false)}>
            <PrimaryLogo />
          </Link>
          <button
            className="p-2 text-slate-600 focus:outline-none"
            onClick={() => setNavigationOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable nav items */}
        <nav className="flex-1 overflow-y-auto px-4 py-2">
          <ul className="flex flex-col">
            {menuData.map((menuItem, key) => (
              <li key={key} className="border-b border-gray-50 last:border-0">
                {menuItem.submenu ? (
                  <>
                    <button
                      onClick={() => setActiveDropdownIndex(activeDropdownIndex === key ? null : key)}
                      className="flex w-full items-center justify-between py-4 text-[14px] font-semibold text-slate-700"
                    >
                      {menuItem.title}
                      <ChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform duration-200 ${
                          activeDropdownIndex === key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdownIndex === key && (
                      <ul className="pb-3 pl-3 flex flex-col gap-0.5">
                        {menuItem.submenu.map((item, subKey) => (
                          <li key={subKey}>
                            <Link
                              href={item.path || "#"}
                              className="block rounded-lg px-3 py-2.5 text-[13px] font-medium text-slate-500 hover:bg-[#387467]/5 hover:text-[#387467] transition-all"
                              onClick={() => {
                                setNavigationOpen(false);
                                setActiveDropdownIndex(null);
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={menuItem.path || "#"}
                    className={`block py-4 text-[14px] font-semibold transition-colors ${
                      pathUrl === menuItem.path ? "text-[#387467]" : "text-slate-700"
                    }`}
                    onClick={() => setNavigationOpen(false)}
                  >
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Platform Access — pinned to bottom */}
        <div className="shrink-0 px-4 py-5 border-t border-gray-100 space-y-2.5">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Access Platforms</p>
          <a
            href="https://certify.truemarkglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-[#387467] px-4 py-3 text-[13.5px] font-bold text-[#387467] hover:bg-[#387467]/5 transition-all"
          >
            <span>CLMEP</span>
            <span className="text-[11px] text-[#387467]/50 font-medium">Certification Platform ↗</span>
          </a>
          <a
            href="https://app.truemarkglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg bg-[#387467] px-4 py-3 text-[13.5px] font-bold text-white hover:bg-[#2d5e53] transition-all"
          >
            <span>Truvera</span>
            <span className="text-[11px] text-white/50 font-medium">Conformity Assessment ↗</span>
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {navigationOpen && (
        <div
          className="fixed inset-0 z-[999] lg:hidden bg-black/20"
          onClick={() => setNavigationOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
