var tasks = [];
function addTask(title, priority) {
    var newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false,
        priority: priority
    };
    tasks.push(newTask);
    console.log("добавлена новая задача:", newTask);
}
// Функция отметки задачи как выполненной
function completeTask(id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true;
            console.log("задача выполнена:", tasks[i]);
            return;
        }
    }
    console.log("задача не найдена");
}
// Функция вывода всех задач
function showTasks() {
    console.log("\nсписок всех задач:");
    tasks.forEach(function (task) {
        console.log("[".concat(task.completed ? '✓' : ' ', "] ").concat(task.id, ". ").concat(task.title, " (").concat(task.priority, ")"));
    });
}
// Давайте попробуем использовать наши функции
addTask("покушать", "high");
addTask("покакать", "medium");
addTask("спать", "low");
showTasks();
completeTask(1);
showTasks();
