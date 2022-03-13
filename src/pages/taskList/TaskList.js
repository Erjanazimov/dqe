import React from 'react';
import taskCss from "./TaskList.module.css";
import { Link } from "react-router-dom";

const TaskList = () => {
    return (
        <div className="container">
            <div className={taskCss.containerTask}>
                <div className={taskCss.title}>
                <h1>Список заданий </h1>
                    <h1>Тема</h1>
                </div>
                <div className={taskCss.taskHr}></div>
                <div className={taskCss.taskList}>
                    <div className={taskCss.flexList}>
                    <div className={taskCss.taskTitle}>Этап 1</div>
                        <ul className={taskCss.taskLink}>
                            <Link to="/taskExecution">
                            <li className={taskCss.listPost}><div><span>1. </span>Two</div><div
                                className={taskCss.completed}>Выполнено</div></li>
                            </Link>
                            <li className={`${taskCss.listPost} ${taskCss.fonsTaskText}`}><div><span>2. </span>Two</div>
                                <div className={taskCss.completed}>Выполнено</div></li>
                            <li className={taskCss.listPost}><div><span>1. </span>Two</div>
                                <div className={taskCss.taskTextNeactive}> Невыполнено</div></li>
                            <li className={`${taskCss.listPost} ${taskCss.fonsTaskText}`}><div><span>2. </span>Two</div>
                                <div className={taskCss.completed}>Выполнено</div></li>
                            <li className={taskCss.listPost}><div><span>1. </span>Two</div>
                                <div className={taskCss.taskTextNeactive}> Невыполнено</div></li>
                            <li className={`${taskCss.listPost} ${taskCss.fonsTaskText}`}><div><span>2. </span>Two</div>
                                <div className={taskCss.completed}>Выполнено</div></li>
                            <li className={taskCss.listPost}><div><span>1. </span>Two</div>
                                <div className={taskCss.taskTextNeactive}> Невыполнено</div></li>
                            <li className={`${taskCss.listPost} ${taskCss.fonsTaskText}`}><div><span>2. </span>Two</div>
                                <div className={taskCss.completed}>Выполнено</div></li>
                            <li className={taskCss.listPost}><div><span>1. </span>Two</div>
                                <div className={taskCss.taskTextNeactive}> Невыполнено</div></li>
                            <li className={`${taskCss.listPost} ${taskCss.fonsTaskText}`}><div><span>2. </span>Two</div>
                                <div className={taskCss.completed}>Выполнено</div></li>
                            <li className={taskCss.listPost}><div><span>1. </span>Two</div>
                                <div className={taskCss.taskTextNeactive}> Невыполнено</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskList;