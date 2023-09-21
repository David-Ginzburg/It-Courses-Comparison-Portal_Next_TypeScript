import { GetStaticProps } from "next";
import { useState } from "react";
import {
  Button,
  Htag,
  Paragraph,
  Tag,
  Rating,
  Input,
  Textarea,
} from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Ghost
      </Button>
      <Paragraph size="s">wefwefwefwefwefewf</Paragraph>
      <Paragraph>wefwefwefwefwefewf</Paragraph>
      <Paragraph size="l">wefwefwefwefwefewf</Paragraph>
      <Tag>Привет</Tag>
      <Tag size="s" color="green">
        Привет
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="placeholder" />
      <Textarea />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
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
