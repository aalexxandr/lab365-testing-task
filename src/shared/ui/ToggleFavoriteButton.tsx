import { ReactComponent as StarIcon } from 'shared/assets/icons/Star.svg';

interface IToggleFavoriteButtonProps {
	isFavoritePerson: boolean;
	onToggleFavorite: () => void;
}
export const ToggleFavoriteButton = ({
	isFavoritePerson,
	onToggleFavorite,
}: IToggleFavoriteButtonProps) => {
	return (
		<button onClick={onToggleFavorite}>
			<StarIcon
				height='20'
				width='20'
				fill={`${isFavoritePerson ? '#fcd34d' : 'none'}`}
			/>
		</button>
	);
};
