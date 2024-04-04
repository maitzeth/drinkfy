import { useState } from 'react';
import { formatDescriptionToHTML, cn } from '@/common/utils';

export const TextClamp = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className={cn('transition-all', {
        'line-clamp-4': !expanded,
      })}>
        {formatDescriptionToHTML(text)}
      </div>
      <button type="button" className="text-sm font-bold text-accent" onClick={toggleExpansion}>
        Read {expanded ? 'less' : 'more'}
      </button>
    </div>
  );
};