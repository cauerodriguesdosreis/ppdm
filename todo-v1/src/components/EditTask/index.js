import React, {useState, useEffect} from "react";
import {Modal,
        View,
        Text,
        TextInput,
        TouchableOpacity,
    } from 'react-native';
import { styles } from './style';
import { styles as style } from './style';

export default function EditTask({ visible, taskData, onSave, onClose }) {
    const [currentTask, setCurrentTask] = useState(taskData);

    useEffect(() => {
        setCurrentTask(taskData);
    }, [taskData]);
    return (
        <Modal visible={visible} animationType="fade">
            <View style={styles.modal}>
                <Text style={styles.titulo}>Editar Tarefa</Text>

                <TextInput
                value={currentTask.title}
                    style={style.title}
                    onChangeText={t=> setCurrentTask
                        ({...currentTask, title: t})}
                        />
                    <TextInput
                    value={currentTask.description}
                    style={style.desc}
                    onChangeText={t=> setCurrentTask
                        ({...currentTask, description: t})}
                        
                    >
                    </TextInput>

                    <TouchableOpacity style={styles.button} onPress={() => onSave(currentTask)}>
                        <Text style={styles.buttonText}>Atualizar</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                </Modal>


    )
}