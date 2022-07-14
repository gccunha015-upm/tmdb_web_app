import { useCallback } from 'react';

function ListName({ id, name }: Props): JSX.Element {
	const deleteList = useCallback(() => {
		console.log(id);
	}, []);

	return (
		<div>
			<button onClick={deleteList}>Deletar lista</button>
			<p>{name}</p>
		</div>
	);
}

type Props = {
	id: string;
	name: string;
};

export default ListName;
