import { GRID_DATA_ITEMS } from '../data';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <main
      className={`
        w-[350px] lg:w-[1000px]
        bg-gray-200
        flex
        flex-col
        items-center
        pt-4
        pb-4
        `}
    >
      <div
        className={`w-full 
            flex flex-col 
            items-center 
            bg-gray-100 
            pt-10 pb-10`}
      >
        <div className="title">Babchenkov music</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {GRID_DATA_ITEMS.map((gridDataItem) => {
            const { id, attributes } = gridDataItem;

            return (
              <Link key={id} href={attributes.href}>
                <div
                  className={`${attributes.background} 
                w-36 h-36 lg:w-52 lg:h-52
                flex items-end border-[aqua] border-[2px]`}
                >
                  <div
                    className={`
                    font-ranga
                    bg-slate-200/75
                    w-full
                    text-center
                    mb-2
                    text-sm
                    lg:text-2xl
                    h-[18px]
                    lg:h-[30px]
                    hover:text-white
                    hover:bg-slate-700/75
                    `}
                  >
                    {attributes?.text}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <br />
      {children}
    </main>
  );
}
