import { useState, useEffect } from 'react';

export default function useSharedListTask(defaultValue) {
	const [tasks, setTasks] = useState(defaultValue);

	function getListTask() {
		if (localStorage.getItem('tasks')) {
			setTasks(JSON.parse(localStorage.getItem('tasks')));
		}
	}

	useEffect(() => {
		getListTask();
	}, []);

	return {
		tasks,
    setTasks
	}
}