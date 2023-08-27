'use client';
import {
  usePathname,
  useSelectedLayoutSegments,
} from 'next/navigation';
import LayoutStructure from 'components/layout-structure';
import {
  RECORDS_MAP,
  findIdByPathname,
  SEGMENT_TITLES_MAP,
} from './[id]/data.js';
import SegmentBreadcrumbs from '@/components/segment-breadcrumbs.js';

export default function Layout({ children }) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  const id = findIdByPathname(pathname);
  const { background } = RECORDS_MAP[id];
  console.log(`pathname: ${pathname}`);
  console.log(`segments: ${segments}`);
  return (
    <LayoutStructure
      title={
        <SegmentBreadcrumbs
          startingSegment={'/record'}
          segments={segments}
          segmentTitlesMap={SEGMENT_TITLES_MAP}
        />
      }
      background={background}
    >
      <div className="flex flex-col items-center">{children}</div>
    </LayoutStructure>
  );
}
