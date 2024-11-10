const TaskOnProgress = () => (
    <>
        <div className="on-progress">
            <div className="header">
                <div className="todo">On Progress</div>
                <div className="orange-line"></div>
            </div>
            <div className="task-item">
                <div className="btns">
                    <div><span className="obtn">Low</span></div>
                    <div><span><i className="fa-solid fa-ellipsis"></i></span></div>
                </div>
                <div className="txt">
                    <div className="heading">Onboarding Illustrations</div>
                    <p className="sub"></p>
                </div>
                <div className="deadline">
                    <span>Deadline:</span>
                    <span>12/5/24</span>
                </div>
            </div>
            <div className="task-item">
                <div className="btns">
                    <div><span className="obtn">Low</span></div>
                    <div><span><i className="fa-solid fa-ellipsis"></i></span></div>
                </div>
                <div className="txt">
                    <div className="heading">Moodboard</div>
                    <p className="sub"></p>
                </div>
                <div className="deadline">
                    <span>Deadline:</span>
                    <span>12/5/24</span>
                </div>
            </div>
        </div>
    </>
)

export default TaskOnProgress