import { GetServerSideProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";
import { firstLevelMenu } from "../../helpers/helpers";
import { ParsedUrlQuery } from "querystring";
import { API } from "../../helpers/api";

function Type({ firstCategoryName }: TypeProps): JSX.Element {
  return <>Нет элементов меню у {firstCategoryName}</>;
}

export default withLayout(Type);

export const getServerSideProps: GetServerSideProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id,
  });

  const menuFirstItem = menu?.[0]?.pages?.[0]?.alias;
  if (menuFirstItem) {
    return {
      redirect: {
        destination: `/${firstCategoryItem.route}/${menuFirstItem}`,
        permanent: true,
      },
    };
  }

  return {
    props: {
      menu: menu ?? [],
      firstCategory: firstCategoryItem.id,
      firstCategoryName: firstCategoryItem.name,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  firstCategoryName?: string;
}
