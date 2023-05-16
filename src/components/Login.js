import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
const imageBackground = require("../../assets/caitlyn.jpg");

export default function Login() {
  clicou = () => {
    Alert.alert("Login realizado", "Você entrou");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <View style={styles.loginArea}>
          <Image
            source={require("../../assets/caitlyn.jpg")}
            style={styles.image}
          ></Image>
          <Text style={{ color: "white", fontSize: 22 }}>Entrar</Text>
          <TextInput placeholder="Digite seu email" style={styles.input} />
          <TextInput
            placeholder="Digite sua senha"
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              this.clicou();
            }}
          >
            <Text style={styles.botaoText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  imageBackground: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loginArea: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "90%",
    paddingVertical: 50,
    paddingHorizontal: 40,
    borderColor: "black",
    borderColor: "rgb(110,65,160)",
    borderRadius: 50,
    borderWidth: 2,
  },
  loginText: {
    color: "white",
    fontSize: 30,
  },
  image: {
    width: 80,
    height: 80,
    borderColor: "black",
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 2,
  },
  input: {
    marginTop: 10,
    fontSize: 16,
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
  },
  botao: {
    width: "80%",
    height: 42,
    backgroundColor: "rgb(110,65,160)",
    marginTop: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
