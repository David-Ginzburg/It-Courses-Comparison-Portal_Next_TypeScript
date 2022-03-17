import { useState } from "react";
import { Button, Htag, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
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
		</>
	);
}

export default withLayout(Home);