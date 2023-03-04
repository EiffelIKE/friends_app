export interface TabDataProps {
  tabs: Array<TabObj>;
  activeTab: number;
  onClick: (id: number) => void;
  children: React.ReactNode;
}

export type TabObj = {
  id: number;
  title: string;
};
