import React, {useEffect, useState} from 'react';
import changeCss from "./Change.module.css";
import Save from "../../../components/save/Save";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editGroupAdd, editGroupChange} from "../../../redux/groupSlice";



const Change = () => {
    const popoversRef = React.createRef();
    const dispatch = useDispatch();
    const editGroupState = useSelector(state => state.groups.nameGroup);
    const data = localStorage.getItem("group");
    const parse = JSON.parse(data);
    const tokenState = useSelector(state => state.authorization.token);
    const [value, setValue] = React.useState(null);

    const popoversBtn = () => {
        popoversRef.current.classList.toggle("dNone");
    }

    useEffect(() => {
        if (!editGroupState.title){
            dispatch(editGroupAdd({data: parse}))
        }
    }, [])

    const editHandler = (name, e) => {
        dispatch(editGroupChange({[name]:e}))
    }

    const btnEdit = (e) => {
       // dispatch(fetchEditBtn({
       //     tokenState,
       //     editGroupState
       // }))

        console.log(editGroupState)
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className={changeCss.flex_change}>
                <Link to="/mentor">
                <div className={changeCss.row}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                         className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </div>
                </Link>
                <div className={changeCss.title}>
                    <h1>Настройка группы</h1>
                    <form onSubmit={btnEdit}>
                    <div className={changeCss.etap}>
                        <div>
                            <input required type="text" placeholder="Название группы"
                                   onChange={(e) => editHandler("title",e.target.value)}
                                   value={editGroupState.title}/>
                        </div>
                        <div>
                            <input required type="text" placeholder="Язык"
                                   onChange={(e) => editHandler("language",e.target.value)}
                                   value={editGroupState.language}/>
                        </div>
                        <div>
                            <input required type="text" placeholder="Ментор"
                                   onChange={(e) => editHandler("mentor",e.target.value)}
                                   value={editGroupState.mentor}/>
                        </div>
                        <div>
                        </div>
                        <div>
                            <input className="btn btn-outline-dark" type="submit" value="Изменить"/>
                        </div>
                    </div>
                    </form>
                    <div className={changeCss.edit}>
                        <h1>Этап</h1>
                        <div className={changeCss.etap}>
                            <div>
                                <input type="text" placeholder="Какой этап"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Количество дней"/>
                            </div>
                            <div>
                                <input type="date"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Количество баллов"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Ордер"/>
                            </div>

                            <div className={changeCss.teg}>
                                <div onClick={popoversBtn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                         className="bi bi-folder" viewBox="0 0 16 16">
                                        <path
                                            d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                                    </svg>
                                    Загрузка задач</div>
                            </div>

                            <div ref={popoversRef} className="dNone">
                                <Save/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={changeCss.title}>
                    <h1>Загруженные задачи</h1>
                    <ol>
                        <li>Two Sum</li>
                        <li>Add Two Sum</li>
                        <li>Reverse add Two Sum</li>
                    </ol>
                </div>

            </div>
        </div>
    );
};

export default Change;