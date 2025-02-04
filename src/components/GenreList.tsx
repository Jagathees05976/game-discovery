import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenre();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List>
			{data.map((genre) => (
				<ListItem paddingY="5px" key={genre.id}>
					<HStack paddingX={4}>
						<Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
						<Button fontStyle='normal' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant="link">
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
