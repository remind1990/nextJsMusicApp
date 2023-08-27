import LayoutStructure from 'components/layout-structure';
export const metadata = {
  title: 'connect with Oleksandr Babchenkov',
};
export default function Layout({ children }) {
  return (
    <LayoutStructure
      background="bg-gradient-to-b from-slate-100 to-pink-100 "
      title="lets hang around"
    >
      {children}
    </LayoutStructure>
  );
}
