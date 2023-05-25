import { StatusBar } from "expo-status-bar";
import { NewsList } from "../../components/NewsList";
import { WelcomeHeader } from "../../components/WelcomeHeader";
import { Container } from "./styles";

export function Home() {

    return (
        <Container>

            <StatusBar translucent backgroundColor='transparent' style='light' />
            
            <WelcomeHeader />
            <NewsList />
        </Container>
    )
}