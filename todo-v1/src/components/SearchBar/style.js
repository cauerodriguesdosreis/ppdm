import { StyleSheet } from "react-native"; 
import { theme } from '../../styles/global';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: theme.colors.border,
        fontSize: 16,
        marginBottom: 20,
        color: theme.colors.textMain,
    }
});