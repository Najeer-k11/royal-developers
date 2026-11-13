import { useEffect, useRef } from 'react';
import { useScrollLock } from '../hooks/useScrollLock';

/**
 * Accessible modal built on the native <dialog> element, which provides the
 * focus trap, Escape handling, background inertness and focus restoration.
 */
export default function Modal({ open, onClose, label, className = '', children }) {
  const ref = useRef(null);
  useScrollLock(open);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={`modal ${className}`.trim()}
      aria-label={label}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      {open && children}
    </dialog>
  );
}
