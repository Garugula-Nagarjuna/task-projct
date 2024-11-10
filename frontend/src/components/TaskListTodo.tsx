// TaskList component with sample tasks
import "./TaskListTodo.css"

const TaskList = () => (
    <div className="tasks">
        <div className="header">
            <div className="todo">To Do</div>
            <div className="blue-line"></div>
        </div>
        <div className="task-item">
            <div className="btns">
                <div ><span className="obtn">Low</span></div>
                <div><span><i className="fa-solid fa-ellipsis"></i></span></div>
            </div>
            <div className="txt">
                <div className="heading">Brainstorming</div>
                <p className="sub">Brainstorming brings team members' diverse experience into play.</p>
            </div>
            <div className="deadline">
                <span>Deadline:</span>
                <span>12/5/24</span>
            </div>
        </div>

        <div className="task-item">
            <div className="btns">
                <div><span className="rbtn">High</span></div>
                <div><span><i className="fa-solid fa-ellipsis"></i></span></div>
            </div>
            <div className="txt">
                <div className="heading">Research</div>
                <p className="sub">User research helps you to create an optimal product for users.</p>
            </div>
            <div className="deadline">
                <span>Deadline:</span>
                <span>12/5/24</span>
            </div>
        </div>
        <div className="task-item">
            <div className="btns">
                <div><span className="rbtn">High</span></div>
                <div><span><i className="fa-solid fa-ellipsis"></i></span></div>
            </div>
            <div className="txt">
                <div className="heading">Wireframes</div>
                <p className="sub">Low fidelity wireframes include the most basic content and visuals.</p>
            </div>
            <div className="deadline">
                <span>Deadline:</span>
                <span>12/5/24</span>
            </div>
        </div>
    </div>


);

export default TaskList