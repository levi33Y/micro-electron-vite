import {Button} from "antd";
import {ipcRendererSend} from "../utils/desktop";

export const HeaderApp  = () => {
    const handleWindow = (eventName: string) => {
        ipcRendererSend(eventName)
    }

    return (
        <div className="flex justify-between">
            <span className="text-white">Header</span>
            <div className="flex gap-2 items-center">
                <Button onClick={()=>{
                    handleWindow("win-"+'max')}}>放大</Button>
                <Button onClick={()=>{handleWindow("win-"+'min')}}>隐藏</Button>
                <Button onClick={()=>{handleWindow("win-"+'restore')}}>还原</Button>
            </div>
        </div>
    )
}