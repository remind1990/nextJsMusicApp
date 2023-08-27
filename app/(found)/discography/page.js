'use client';
import { useState, useEffect, memo, useDeferredValue } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RECORDS } from '../record/[id]/data';
function PlayRow({ title, href, iconImage }) {
  return (
    <a
      className="flex flex-row justify-center p-3 hover:bg-sky-100 border-top-[2px] border-slate-200"
      href={href}
      target="_blank"
    >
      <span className="mr-1">Play on</span>
      <span className="relative w-[80px] h-[24px]">
        <Image src={iconImage} alt={title} fill sizes="80px" />
      </span>
    </a>
  );
}
export default function Page() {
  const [text, setText] = useState('');
  const [records, setRecords] = useState(RECORDS);
  const deferredText = useDeferredValue(text);
  useEffect(() => {
    const filteredRecords = RECORDS.filter((record) =>
      record.title.includes(deferredText)
    );
    setRecords(filteredRecords);
  }, [deferredText]);

  const Records = memo(function Records({ records }) {
    if (records.length > 0) {
      return records.map(
        ({
          id,
          title,
          date,
          blurb,
          albumImage,
          recordHalfImage,
          spotifyLink,
          appleMusicLink,
          youtubeMusicLink,
        }) => (
          <div k ey={id}>
            <div className="discograpy-panel text-left">
              <Link
                href={`/record/${id}`}
                className="flex flex-row justify-center"
              >
                <div className="relative w-[180px] h-[180px] lg:w-[256px] lg:h-[256px]">
                  <Image
                    src={albumImage}
                    fill
                    alt="album image"
                    sizes="(max-width: 1024px) 180px, 256px"
                  />
                </div>
                <div className="relative w-[90px] h-[180px] lg:w-[128] lg:h-[256px]">
                  <Image
                    src={recordHalfImage}
                    fill
                    alt="record half image"
                    sizes="(max-width: 1024px) 90px, 128px"
                  />
                </div>
              </Link>
              {title}
              <div className="text-justify text-md lg:text-lg">
                {blurb}
              </div>
              <div className="text-sm text-slate-600">
                Release Date: {date}
              </div>
              <br />
              <PlayRow
                title="Spotify"
                href={spotifyLink}
                iconImage="/spotify_icon_500.png"
              />
              <PlayRow
                title="Apple Music"
                href={appleMusicLink}
                iconImage="/apple_music_icon_500.png"
              />
              <PlayRow
                title="YouTube Music"
                href={youtubeMusicLink}
                iconImage="/youtube_music_icon_500.png"
              />
            </div>

            <br />
          </div>
        )
      );
    }
    return (
      <div className="discograpy-panel text-center">
        No match found
      </div>
    );
  });

  return (
    <div className="min-h-screen">
      <div className="discograpy-panel text-center">
        <div className="mb-2">Search for a record</div>
        <input
          type="text"
          className="w-full border-slate-200 border-[2px]"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <br />
      <Records records={records} />
    </div>
  );
}
