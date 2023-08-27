import LayoutStructure from 'components/layout-structure';
export const metadata = {
  title: 'Playlist personoality Quiz',
};
export default function Layout({ children }) {
  return (
    <LayoutStructure
      background="bg-gradient-to-b from-slate-100 to-purple-50 "
      title="Play list personality Quiz"
    >
      {children}
    </LayoutStructure>
  );
}
