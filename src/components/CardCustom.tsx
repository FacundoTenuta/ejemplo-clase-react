//@ts-nocheck
import { Button, Card, Col, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export const CardCustom = ({ data }) => {
	console.log(data);

	const [mostrarBoton, setMostrarBoton] = useState(true);

	useEffect(() => {
		console.log('Montado');
		return () => {
			console.log('Desmontado');
		};
	}, []);

	return (
		<>
			<Card css={{ bg: '$black', w: '100%' }}>
				<Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
					<Col>
						<Text h4 color="white">
							{data.original_title}
						</Text>
					</Col>
				</Card.Header>
				<Card.Image
					src={`https://i.stack.imgur.com/lnYep.png`}
					width="100%"
					height={340}
					objectFit="cover"
					alt="Card image background"
				/>
				<Card.Footer css={{ position: 'absolute', zIndex: 1, bottom: 5 }}>
					{mostrarBoton && (
						<Button auto flat color="primary">
							Botón
						</Button>
					)}
				</Card.Footer>
			</Card>
		</>
	);
};
