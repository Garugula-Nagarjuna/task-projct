const TaskDone = () => (
    <>
        <div className="on-progress">
        <div className="header">
                <div className="todo">On Progress</div>
                <div className="green-line"></div>
            </div>
            <div className="task-item">
                <div className="btns">
                    <div><span className="gbtn">Completed</span></div>
                    <div><span><i className="fa-solid fa-ellipsis"></i></span></div>
                </div>
                <div className="txt">
                    <div className="heading">Mobile App</div>
                    <p className="sub"></p>
                </div>
                <div className="deadline">
                    <span>Deadline:</span>
                    <span>12/5/24</span>
                </div>
            </div>
            <div className="task-item">
                <div className="btns">
                    <div><span className="gbtn">Completed</span></div>
                    <div><span><i className="fa-solid fa-ellipsis"></i></span></div>
                </div>
                <div className="txt">
                    <div className="heading">Design Systems</div>
                    <p className="sub">It just needs to adapt the UI from what you did before.</p>
                </div>
                <div className="deadline">
                    <span>Deadline:</span>
                    <span>12/5/24</span>
                </div>
            </div>
        </div>
    </>
)

export default TaskDone