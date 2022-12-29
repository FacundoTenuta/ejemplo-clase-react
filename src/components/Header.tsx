import { Navbar, Button, Link, Text } from '@nextui-org/react';

export const Header = () => {
	return (
		<Navbar isBordered variant="sticky">
			<Navbar.Brand>
				<Text b color="inherit" hideIn="xs">
					Peliculas
				</Text>
			</Navbar.Brand>
			<Navbar.Content hideIn="xs">
				<Navbar.Link href="/">Inicio</Navbar.Link>
				<Navbar.Link href="pagina1">Página 1</Navbar.Link>
				<Navbar.Link href="pagina2">Página 2</Navbar.Link>
			</Navbar.Content>
			<Navbar.Content>
				<Navbar.Link color="inherit" href="#">
					Iniciar Sesión
				</Navbar.Link>
				<Navbar.Item>
					<Button auto flat as={Link} href="#">
						Registrarse
					</Button>
				</Navbar.Item>
			</Navbar.Content>
		</Navbar>
	);
};
