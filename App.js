import {SafeAreaView} from 'react-native';
import {StatusBarComponent} from './components/statusbar.component';
import {AppBarComponent} from './components/appbar.component';
import {Text,Stack,VStack, TextInput, IconButton ,Button} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {reinitialisationStyle} from './css/reinitialisation.style';

export default function App() {
  return (
    <SafeAreaView style={reinitialisationStyle.container}>

      <StatusBarComponent/>
      <AppBarComponent/>

      <VStack>
        
        <Text variant="h5" style={reinitialisationStyle.textEntete} >
            Réinitialiser le mot de passe
          </Text>

        <Stack spacing={2} style={reinitialisationStyle.content}>

          <TextInput
            label="Mot de passe"
            variant="outlined"
            trailing={props => (
              <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
            )}
          />

          <TextInput
            label="Confirmer le mot de passe"
            variant="outlined"
            trailing={props => (
              <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
            )}
          />


          <Button title="Rénitialiser" style={reinitialisationStyle.btnSubmit}/>

        </Stack>
      </VStack>

    </SafeAreaView>
  );
}
