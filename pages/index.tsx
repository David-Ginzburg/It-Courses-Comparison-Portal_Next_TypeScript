import { useState } from "react";
import { Button, Htag, Paragraph, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(0);

	return (
		<div>
			<Htag tag='h3'>Текст</Htag>
			<Button appearance="primary" arrow="right">Кнопка</Button>
			<Button appearance="ghost" arrow="right">Ghost</Button>
			<Paragraph size="s">wefwefwefwefwefewf</Paragraph>
			<Paragraph>wefwefwefwefwefewf</Paragraph>
			<Paragraph size="l">wefwefwefwefwefewf</Paragraph>
			<Tag>Привет</Tag>
			<Tag size="s" color="green">Привет</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
		</div>
	);
}