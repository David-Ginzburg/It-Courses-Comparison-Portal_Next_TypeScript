import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";
import { useRouter } from "next/router";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
  isServerComponentStartLoading?: boolean;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
  isServerComponentStartLoading: false,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  useEffect(() => {
    setMenuState(menu);
  }, [menu]);

  const router = useRouter();
  const [isServerComponentStartLoading, setIsServerComponentStartLoading] =
    useState(false);

  const handleStartLoading = () => {
    setIsServerComponentStartLoading(true);
  };

  const handleFinishLoading = () => {
    setIsServerComponentStartLoading(false);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleStartLoading);
    router.events.on("routeChangeComplete", handleFinishLoading);
    router.events.on("routeChangeError", handleFinishLoading);

    return () => {
      router.events.off("routeChangeStart", handleStartLoading);
      router.events.off("routeChangeComplete", handleFinishLoading);
      router.events.off("routeChangeError", handleFinishLoading);
    };
  }, [router.events]);

  return (
    <AppContext.Provider
      value={{
        menu: menuState,
        firstCategory,
        setMenu,
        isServerComponentStartLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
