'use client';

import { useState } from 'react';
import { CORE_COURSES } from '@/data/academics';

const VISIBLE = 5;

export default function CourseTags() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? CORE_COURSES : CORE_COURSES.slice(0, VISIBLE);

  return (
    <div className="flex flex-wrap gap-1.5">
      {visible.map((course) => (
        <span
          key={course}
          className="pill bg-morandi-accent/8 text-morandi-accent border border-morandi-accent/15 text-[0.7rem] py-0.5 px-2"
        >
          {course}
        </span>
      ))}
      <button
        type="button"
        onClick={() => setShowAll((v) => !v)}
        aria-expanded={showAll}
        className="pill bg-muted text-muted-foreground border border-border/50 text-[0.7rem] py-0.5 px-2 cursor-pointer hover:bg-morandi-accent/10"
      >
        {showAll ? '收起' : `+${CORE_COURSES.length - VISIBLE} 更多`}
      </button>
    </div>
  );
}
