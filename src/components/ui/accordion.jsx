import { useState } from 'react';

export function Accordion({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export function AccordionItem({ value, children, className, id }) {
  const [open, setOpen] = useState(false);
  return (
    <div id={id} className={className}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer font-medium">
        {children[0]}
      </div>
      {open && <div className="mt-2">{children[1]}</div>}
    </div>
  );
}
