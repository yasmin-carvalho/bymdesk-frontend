import unifei from '../../assets/unifei.jpg'
import { Container, Content } from './styles'

export function Header () {
    return (
        <Container>
            <Content>
            <img src={unifei} alt="logounifei" width="380" height="150" />
                <div>
                    <p>Bem vindo(a)</p>
                    <nav>
                        <button type="button">LOGIN</button>
                        <button type="button">REGISTRAR</button>
                    </nav>  
                </div>
            </Content>
        </Container>
    )
}