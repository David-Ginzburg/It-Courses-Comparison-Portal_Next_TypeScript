import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(0);

	return (
		<>
			<Htag tag='h3'>Текст</Htag>
			<Button appearance="primary" arrow="right">Кнопка</Button>
			<Button appearance="ghost" arrow="right">Ghost</Button>
			<Paragraph size="s">wefwefwefwefwefewf</Paragraph>
			<Paragraph>wefwefwefwefwefewf</Paragraph>
			<Paragraph size="l">wefwefwefwefwefewf</Paragraph>
			<Tag>Привет</Tag>
			<Tag size="s" color="green">Привет</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}