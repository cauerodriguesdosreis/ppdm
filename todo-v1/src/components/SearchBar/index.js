import { TextInput, View } from 'react-native';
import { styles } from './style';

export default function SearchBar({ value, onChange }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Pesquisar tarefas..."
                value={value}
                onChangeText={onChange}
            />
        </View>
    );
}
