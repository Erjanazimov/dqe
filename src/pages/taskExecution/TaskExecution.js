import React, {useState} from 'react';
import executionCss from "./TaskExecution.module.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import {Link} from "react-router-dom";


const TaskExecution = () => {
const [textCode, setTextCode] = useState("");
    function onChange(newValue) {
        setTextCode(newValue)
    }

    return (
        <div className={executionCss.TaskExecution}>
            <div className={executionCss.taskfons}>
                <Link to="/taskList">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                         className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </div>
                </Link>
            </div>
            <div className={executionCss.TaskExecution}>
                <div className={executionCss.taskInfo}>
                    <h2>Инструкции</h2>
                    <div className={executionCss.widthTaskInfo}>
                        Given an array of integers nums and an integer target,
                        return indices of the two numbers such that they add up to target.
                        You may assume that each input would have exactly one solution,
                        and you may not use the same element twice. You can return the answer in any order.
                    </div>

                    <div className={executionCss.note}>
                        <h2>Note</h2>
                    <div className={executionCss.widthTaskInfo}>
                        Challenge yourself on kata, which are small coding exercises.
                        Each kata is crafted by the community to help you strengthen different coding skills.
                    </div>
                    </div>
                    <div className={executionCss.taskFlex}>
                        <div className={executionCss.taskNumber}>
                            <input type="text"/>
                        </div>
                        <div className={executionCss.btntaskNumber}>
                            <button>Mathematics</button>
                        </div>
                        <div className={executionCss.btntaskNumber}>
                            <button>Numbers</button>
                        </div>
                    </div>
                </div>
                <div className={executionCss.taskCode}>
                    <h2>Решение</h2>
                    <div className={executionCss.taskCodeFlex}>
                    <div  className={executionCss.taskCode}>
                        <AceEditor
                            mode="java"
                            theme="github"
                            onChange={onChange}
                            width="600px"
                            height="340px"
                            fontSize="16px"
                            name="UNIQUE_ID_OF_DIV"
                        />
                    </div>
                    </div>

                    <div className={executionCss.textComp}>
                        <h2>Результат</h2>
                        <p>Выполнено!</p>
                    </div>
                    <div className={executionCss.panelCode}>
                        <div className={executionCss.btnDrop}>
                            <button>Сбросить</button>
                        </div>
                        <div className={executionCss.nextTask}>
                            <p>Следующее задание </p>
                            <div className={executionCss.errov}> > </div>
                        </div>
                        <div className={executionCss.send}>
                            <button>Отправить</button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskExecution;