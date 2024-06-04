export function getSubheading(numberOfTasks) {
  switch (true) {
    case numberOfTasks > 4:
      return `${numberOfTasks} tasks`;

    case numberOfTasks > 1:
      return `${numberOfTasks} tasks`;

    case numberOfTasks === 1:
      return "1 task";

    case numberOfTasks === 0:
    default:
      return "No tasks";
  }
}
