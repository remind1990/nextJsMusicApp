import Link from 'next/link';

export default function SegmentBreadcrumbs({
  segments,
  startingSegment,
  segmentTitlesMap,
}) {
  return (
    <>
      {segments.map((segment, i) => {
        const href = `${startingSegment}/${segments
          .slice(0, i + 1)
          .join('/')}`;

        const isLastSegment = i === segments.length - 1;
        // console.log('href', href);
        // console.log(segmentTitlesMap[segment]);
        // console.log(isLastSegment);

        return (
          <span key={segment}>
            {isLastSegment ? (
              segmentTitlesMap[segment]
            ) : (
              <>
                <Link key={i} href={href} className="link">
                  {segmentTitlesMap[segment]} <span>{' > '}</span>
                </Link>
              </>
            )}
          </span>
        );
      })}
    </>
  );
}
