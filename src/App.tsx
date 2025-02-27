import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

const App = () => {
	const [ selectedGenre, setSelectedGenre ] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform ] = useState<Platform | null>(null);

	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`
				}}
				templateColumns={{
					base: '2fr',
					lg: '220px 1fr'
				}}
			>
				<GridItem area="nav">
					{' '}
					<NavBar />{' '}
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" paddingX={5}>
						<GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
					</GridItem>
				</Show>

				<GridItem area="main">
          <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
					<GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
				</GridItem>
			</Grid>
		</>
	);
};

export default App;
