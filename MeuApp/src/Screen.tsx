import { StyleSheet, Text, View, Image } from 'react-native';

export default function Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={{marginTop: '200px'}}>
            <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 45 }}>
                Bem vindo, Pedro
            </Text>
        </View>
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20 }}>
                Você gastou hoje
            </Text>
            <Text style={{ color: 'white', fontSize: 35 }}>
                R$500
            </Text>
        </View>
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20 }}>
                Escolha um periodo:
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginRight: 30 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>
                    Hoje
                </Text>
                <Text style={{ color: 'white', fontSize: 20 }}>
                    Essa semana
                </Text>
                <Text style={{ color: 'white', fontSize: 20 }}>
                    Mês passado
                </Text>
            </View>
        </View>
        
      </View>
      <View style={styles.base}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginInline: 25, marginTop: 30 }}>
            <View style={styles.square}>
                <Image source={require('./assets/Avião Icone.png')} style={{ width: '100%', height: '100%'}} />
            </View>
            <View style={styles.square}>
                <Image source={require('./assets/Casa Icone.png')} style={{ width: '100%', height: '100%'}} />
            </View>
            <View style={styles.square}>
                <Image source={require('./assets/Comida Icone.png')} style={{ width: '100%', height: '100%'}} />
            </View>
            <View style={styles.square}>
                <Image source={require('./assets/Carro Icone.png')} style={{ width: '100%', height: '100%'}} />
            </View>
            <View style={styles.square}>
                <Image source={require('./assets/Ferramenta Icone.png')} style={{ width: '100%', height: '100%'}} />
            </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', marginTop: 50}}>
            <View style={{ backgroundColor: 'white',height: 50,  width: '80%', display: 'flex', flexDirection: 'row',  justifyContent: 'space-around', marginLeft: 40, alignItems: 'center', borderRadius: 10, marginBottom: 30 }}>
                <Text>Pizza R$ 30</Text>
                <Text>20/01/2020</Text>
                <Text></Text>
            </View>
            <View style={{ backgroundColor: 'white',height: 50,  width: '80%', display: 'flex', flexDirection: 'row',  justifyContent: 'space-around', marginLeft: 40, alignItems: 'center', borderRadius: 10 }}>
                <Text>Pizza R$ 35</Text>
                <Text>20/01/2020</Text>
                <Text></Text>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ebe8',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',

  },
  top: {
    width: '100%',
    backgroundColor: '#e54b4b',
    flex: 1,
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  base: {
    width: '100%',
    backgroundColor: '#f7ebe8',
    flex: 1,
    height: '50%'
  },
  square: {
    backgroundColor: '#444140',
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    padding: 9,
    borderRadius: 10
  }

});
