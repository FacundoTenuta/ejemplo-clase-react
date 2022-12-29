//@ts-nocheck
import { Grid, Loading, Spacer, Switch } from '@nextui-org/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { CardCustom } from '../components/CardCustom';
import { getFilms } from '../services/getFilms';

export const HomePage = () => {
	const [mostrar, setMostrar] = useState(true);

	const handleMostrar = () => {
		setMostrar(!mostrar);
	};

	const { data, isLoading } = useQuery('peliculas', getFilms);

	//console.log(data);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<h1>Home Page</h1>
			<Spacer y={2} />
			<Switch style={{ marginLeft: '3rem' }} onChange={handleMostrar} />
			<Spacer y={2} />
			{mostrar && (
				<Grid.Container gap={2} justify="center">
					{data.results.map((element) => {
						return (
							<Grid xs={12} sm={6} lg={3}>
								<CardCustom data={element} />
							</Grid>
						);
					})}
				</Grid.Container>
			)}
		</>
	);
};
