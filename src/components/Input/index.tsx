import {Asterisco, Container, ContainerLabel, StyledInput, Label} from "./style"

export function Input () {
    return (
        <Container>
            <ContainerLabel>
                <Label>
                    Nome 
                </Label>
                <Asterisco>*</Asterisco>
            </ContainerLabel>
            <StyledInput/>
        </Container>
    )
}