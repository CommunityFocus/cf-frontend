import { StyledSubtitle } from "./TimerTitle.styled"


const Subtitle = ({isLoaded,workGrey,isBreak}: {isLoaded:boolean,workGrey:string,isBreak:boolean}) => {
    return (
        <StyledSubtitle isLoaded={isLoaded} color={workGrey}>
					
        {isBreak ? "BREAK" : "WORK"}
        </StyledSubtitle>
    )
}

export default Subtitle