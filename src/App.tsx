import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import './App.css';


export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

const App = () => {

	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


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
					<NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />{' '}
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" paddingX={5}>
						<GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
					</GridItem>
				</Show>

				<GridItem area="main">
					<Flex  paddingLeft={2} marginBottom={5}>
						<Box marginRight={5} > 
						<PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})} />
						</Box>
						<SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
					</Flex>
          
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
};

export default App;
