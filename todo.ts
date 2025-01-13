
interface Task {
    id: number;
    title: string;
    completed: boolean;
    priority: "high" | "medium" | "low"; 
}


let tasks: Task[] = [];


function addTask(title: string, priority: "high" | "medium" | "low"): void {
    const newTask: Task = {
        id: tasks.length + 1,
        title: title,
        completed: false,
        priority: priority
    };
    tasks.push(newTask);
    console.log("добавлена новая задача:", newTask);
}

// Функция отметки задачи как выполненной
function completeTask(id: number): void {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true;
            console.log("задача выполнена:", tasks[i]);
            return;
        }
    }
    console.log("задача не найдена");
}

// Функция вывода всех задач
function showTasks(): void {
    console.log("\nсписок всех задач:");
    tasks.forEach(task => {
        console.log(`[${task.completed ? '✓' : ' '}] ${task.id}. ${task.title} (${task.priority})`);
    });
}

// Давайте попробуем использовать наши функции
addTask("покушать", "high");
addTask("покакать", "medium");
addTask("спать", "low");

showTasks();

completeTask(1); 

showTasks();
