import { BiSolidErrorCircle } from "react-icons/bi";
import { StyledInput } from "./UsernameModal.styled";
import {
	StyledErrorText,
	StyledValidationInput,
} from "./ValidationInput.styled";

interface ValidationInputProps {
	type: string;
	id: string;
	placeholder: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	validationText: string | false;
	onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ValidationInput = (props: ValidationInputProps): JSX.Element => {
	const { validationText } = props;
	return (
		<StyledValidationInput>
			<StyledInput {...props} />
			{validationText && (
				<StyledErrorText>
					<BiSolidErrorCircle />
					{validationText}
				</StyledErrorText>
			)}
		</StyledValidationInput>
	);
};

export default ValidationInput;
