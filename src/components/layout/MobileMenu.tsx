"use client";

import { AnimatePresence, motion } from "framer-motion";

import type { NavLink } from "@/data";

type MobileMenuProps = {
  id: string;
  open: boolean;
  links: NavLink[];
  onClose: () => void;
};

/** Full-screen glass drawer for phones — the primary nav pattern here,
 * since this site is built mobile-first and most visitors arrive on one. */
export default function MobileMenu({ id, open, links, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className="glass-menu fixed inset-0 z-40 flex flex-col justify-center gap-2 px-gutter sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="border-b border-cream-100/10 py-4 font-display text-3xl text-cream-50"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu"
            className="absolute right-6 top-6 text-3xl text-cream-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            ×
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
