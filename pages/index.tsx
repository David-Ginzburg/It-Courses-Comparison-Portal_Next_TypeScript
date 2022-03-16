import { Button, Htag } from "../components";

export default function Home(): JSX.Element {

	return (
		<div>
			<Htag tag='h3'>Текст</Htag>
			<Button appearance="primary">Кнопка</Button>
			<Button appearance="ghost">Ghost</Button>
		</div>
	);
}