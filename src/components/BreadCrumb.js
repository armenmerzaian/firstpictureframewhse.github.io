import React from 'react'

export default function BreadCrumb({crumbs}) {

  return (
    <div className="hidden laptop:block fixed z-10 top-[98px] left-0 right-0 h-12 py-3 border-b-2 border-neutral-20 bg-secondary-dark">
      <div className="text-tertiary-light/87 font-light text-sm leading-6 space-x-2 max-w-[1200px] mx-auto">
        {crumbs.map((crumb, key) => {
          return (
            <>
              <a
                className="py-2 px-4 hover:text-primary-85 hover:bg-neutral-20 rounded-[100px]"
                href={crumb.link}
                key={key}
              >
                {crumb.title}
              </a>
              <span className="text-neutral-20 last-of-type:hidden">|</span>
            </>
          );
        })}
      </div>
    </div>
  );
}