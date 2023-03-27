import { useDispatch } from "react-redux"
const reducer = require("../redux/reducer")

export const useAction = (actionsGroupName) => {
    const actions = reducer[actionsGroupName]
    const dispatch = useDispatch()
    console.log(Object.keys(actions));
    const _actions = {}
    Object.keys(actions).forEach((actionName) => {
            _actions[actionName] = (payload = undefined) => dispatch(actions[actionName](payload))
        }
    )
    console.log(_actions);
    return _actions;
}