import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/nav';
import { links } from '../data/links';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionIds = navItems.map(n => n.section);

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${section}`);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-paper/96 backdrop-blur-md border-b border-stone/40' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10" aria-label="Primary">
        {/* Brand */}
        <a href="#home" onClick={e => go(e, 'home')}
          className="flex items-center gap-3 group">
          <span className="flex h-8 w-8 items-center justify-center border border-stone text-oxblood font-display font-semibold text-sm transition-colors duration-200 group-hover:border-oxblood group-hover:bg-oxblood group-hover:text-paper">
            KS
          </span>
          <span className="hidden sm:block font-mono text-[10px] tracking-[0.2em] uppercase text-ink/60 group-hover:text-oxblood transition-colors duration-200">
            Khadija Sajid
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(item => (
            <a key={item.section} href={`#${item.section}`}
              onClick={e => go(e, item.section)}
              aria-current={active === item.section ? 'true' : undefined}
              className={`nav-link px-3.5 py-2 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                active === item.section ? 'text-oxblood' : 'text-ink/50 hover:text-ink'
              }`}>
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a href={links.email}
            className="hidden sm:inline-flex items-center border border-oxblood bg-oxblood px-5 py-2 font-mono text-[10px] tracking-[0.15em] uppercase text-paper transition-colors duration-200 hover:bg-oxblood-deep">
            Let's Connect
          </a>
          <button type="button" onClick={() => setOpen(o => !o)}
            className="grid h-9 w-9 place-items-center border border-stone text-ink/60 transition-colors hover:border-oxblood hover:text-oxblood lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden bg-paper transition-[max-height,opacity] duration-300 ${
        open ? 'max-h-[520px] border-b border-stone/40 opacity-100' : 'max-h-0 opacity-0'
      }`} aria-hidden={!open}>
        <div className="flex flex-col px-6 py-4 sm:px-10">
          {navItems.map(item => (
            <a key={item.section} href={`#${item.section}`}
              onClick={e => go(e, item.section)}
              className={`border-b border-stone/25 py-3.5 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors ${
                active === item.section ? 'text-oxblood' : 'text-ink/55 hover:text-ink'
              }`}>
              {item.label}
            </a>
          ))}
          <a href={links.email}
            className="mt-5 flex items-center justify-center border border-oxblood bg-oxblood py-3 font-mono text-[10px] tracking-[0.15em] uppercase text-paper">
            Let's Connect
          </a>
        </div>
      </div>
    </header>
  );
}
