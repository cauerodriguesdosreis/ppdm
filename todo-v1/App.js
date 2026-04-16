import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from './src/styles/global';
import SearchBar from './src/components/SearchBar';
import TaskCard from './src/components/TaskCard';
import TaskModal from './src/components/TaskModal';

export default function App() {
  const [tasks, setTasks] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);

  const addTask = (newTask) => {
    if (isEditing && selectedTask) {
      setTasks(tasks.map(task => task.id === selectedTask.id ? { ...newTask, id: selectedTask.id } : task));
      setIsEditing(false);
    } else {
      setTasks([...tasks, { ...newTask, id: Date.now().toString() }]);
    }
    setModalVisible(false);
    setSelectedTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedTask(null);
    setIsEditing(false);
  };

  const filteredTasks = tasks.filter((t) => 
    t.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <SearchBar value={searchText} onChange={setSearchText} />

      {filteredTasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>Nenhuma tarefa encontrada</Text>
        </View>
      ) : (
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              item={item}
              onEdit={() => handleEditTask(item)}
              onDelete={() => deleteTask(item.id)}
            />
          )}
        />
      )}

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => {
          setSelectedTask(null);
          setIsEditing(false);
          setModalVisible(true);
        }}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <TaskModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSave={addTask}
        taskToEdit={isEditing ? selectedTask : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: theme.colors.textMain,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    fontSize: 16,
    color: theme.colors.textSub,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fabText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});