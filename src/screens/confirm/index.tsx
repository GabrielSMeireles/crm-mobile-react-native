import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../../assets/app-name-small.png";
import { ButtonWhite } from "../../components/ButtonWhite";
import { useNavigation } from "@react-navigation/native";
import IllustrationImg from "../../../assets/Ilustration.png";

export function Confirm() {
    const navigation = useNavigation<any>();

    const handleNavigateHome = () => {
        navigation.navigate("SignIn");
    };

    return (
        <View style={styles.container}>
            <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Confira seu Email ? {"\n"}
                </Text>
                <Text style={styles.label}>
                    Enviamos as instruções em seu e-mail {"\n"}
                    para restaurar a sua senha.
                </Text>
            </View>

            <View style={styles.controlsbutons}>
                <ButtonWhite title="Login" onPress={handleNavigateHome} />
            </View>

        </View>
    );
}
