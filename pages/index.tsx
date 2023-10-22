import { GetServerSideProps } from "next";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";
import { firstLevelMenu } from "../helpers/helpers";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const menuFirstItem = menu?.[firstCategory]?.pages?.[0];
  return <>Нет элементов меню у {menuFirstItem.title}</>;
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  const menuFirstItem = menu?.[firstCategory]?.pages?.[0]?.alias;
  if (menuFirstItem) {
    return {
      redirect: {
        destination: `/${firstLevelMenu[firstCategory].route}/${menuFirstItem}`,
        permanent: true,
      },
    };
  }
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
