import { useState, useMemo, ReactNode } from 'react';

export const useHandleTabs = ({
  tabChildrens,
}: {
  tabChildrens: Array<ReactNode>;
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTab = (id: number) => {
    setActiveTab(id);
  };

  const renderNode = useMemo(() => {
    return tabChildrens[activeTab] || null;
  }, [activeTab, tabChildrens]);

  return { activeTab, handleTab, renderNode };
};
