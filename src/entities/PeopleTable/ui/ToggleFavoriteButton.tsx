import { ReactComponent as StarIcon } from 'shared/assets/icons/Star.svg';

interface IToggleFavoriteButtonProps {
	onToggleFavorite: () => void;
}
export const ToggleFavoriteButton = ({
	onToggleFavorite,
}: IToggleFavoriteButtonProps) => {
	return (
		<button onClick={onToggleFavorite}>
			<StarIcon height='20' width='20' />
		</button>
	);
};
