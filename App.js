import react,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function app(){
	const[valor1, setValor1]=useState("20");
	const[valor2, setValor2]=useState("3");
	const[resultado, setResultado]=useState();
	function somar(){
		let resultado = parseFloat(valor1) + parseFloat(valor2);
		setResultado(resultado);
	} 
	function menos(){
		let resultado = parseFloat(valor1) - parseFloat(valor2);
		setResultado(resultado);
	}
	function dividir(){
		let resultado = parseFloat(valor1) / parseFloat(valor2);
		setResultado(resultado);
	}
	function multiplicar(){
		let resultado = parseFloat(valor1) * parseFloat(valor2);
		setResultado(resultado);
	}
	function exponecial(){
		let resultado = parseFloat(valor1) ** parseFloat(valor2);
		setResultado(resultado);
	}
	return(
	<View style={styles.container}>
		<View style={styles.bloco}>
			<Text style={styles.titulo}>Calculadora Simples</Text>
		</View>
		<View style={styles.bloco}>
			<Text> Valor 1: </Text>
			<TextInput style={styles.input}
				value={valor1}
				onChangeText={(valor)=>setValor1(valor)}
				keyBoardType="numeric"
				/>
		</View>
		<View style={styles.bloco}>
			<Text> Valor 2: </Text>
			<TextInput style={styles.input}
				value={valor2}
				onChangeText={(valor)=>setValor2(valor)}
				keyBoardType="numeric"
				/>
		</View>
			
		<View style={styles.bloco}>
				<TouchableOpacity style={styles.botao}
					onPress={somar}
					>
					<Text style={styles.textoBotao}>SOMAR</Text>
				</TouchableOpacity>
		</View>
			
		<View style={styles.bloco}>
				<TouchableOpacity style={styles.botao}
					onPress={menos}
					>
					<Text style={styles.textoBotao}>SUBTRAIR</Text>
				</TouchableOpacity>
		</View>
		
			<View style={styles.bloco}>
				<TouchableOpacity style={styles.botao}
					onPress={dividir}
					>
					<Text style={styles.textoBotao}>DIVIDIR</Text>
				</TouchableOpacity>
		</View>
			
			<View style={styles.bloco}>
				<TouchableOpacity style={styles.botao}
					onPress={multiplicar}
					>
					<Text style={styles.textoBotao}>MULTIPLICAÇÃO</Text>
				</TouchableOpacity>
				
				<View style={styles.bloco}>
				<TouchableOpacity style={styles.botao}
					onPress={exponecial}
					>
					<Text style={styles.textoBotao}>EXPONENCIAÇÃO</Text>
				</TouchableOpacity>
		</View>
		</View>
		<View style={styles.bloco}>
		<Text style={styles.titulo}>
				RESULTADO:{resultado}
			</Text>
		</View>
	</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2828b0'
  },
	bloco:{
		marginTop:20,
		width:'80%',
		marginLeft:'10%',
	},
	titulo:{
		fontSize:30,
		textAlign:'center'
	},
	input:{
		borderWidth:2,
		fontSize:20,
		borderRadius:10
	},
	botao:{
		backgroundColor:'#000',
		borderRadius:10
	},
	textoBotao:{
		color:'#fff',
		textAlign:'center',
		fontSize:20
	},
	
});
