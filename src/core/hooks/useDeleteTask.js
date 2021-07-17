export default function useDeleteTask() {
	function deleteTask(selectedTaskId) {
		if (localStorage.getItem('tasks')) {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
			const tasksAfterDeleteItem = tasks.filter(task => task.id !== selectedTaskId);
      localStorage.setItem('tasks', JSON.stringify(tasksAfterDeleteItem));
		}
	}

	return {
		deleteTask: (selectedTaskId) => deleteTask(selectedTaskId)
	}
}