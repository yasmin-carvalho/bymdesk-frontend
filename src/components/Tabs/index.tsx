import { LinkBar, PageBar } from "./styles";

interface TabsProps {
  arrayTabs: string[];
  children: React.ReactElement;
  setIndexTab: React.Dispatch<React.SetStateAction<number>>;
  indexTab: number;
}

export function Tabs({
  arrayTabs,
  children,
  setIndexTab,
  indexTab,
  ...rest
}: TabsProps) {
  return (
    <>
      <PageBar>
        {arrayTabs.map((item, index) => (
          <LinkBar
            key={item}
            onClick={() => setIndexTab(index)}
            isActive={index === indexTab}
          >
            {item}
          </LinkBar>
        ))}
      </PageBar>
      {children}
    </>
  );
}
