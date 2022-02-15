import Blocks from "./Blocks";
import Floors from "./Floors";
import Button from "./ButtonBlock";
const Box2 = () =>
{
    return (
        <div className="box2">
        <img src="rkh.jpg" className="Intro" /> 
        <p className="textimg"> "A great place to learn and live..." </p>
        
        <div className="btnspace">
        <Button title = "A Block" />
        <Button title = "B Block" />
        <Button title = "C Block" />
        <Button title = "D Block" />
        <Button title = "E Block" />
        </div>

        </div>
    )
};

export default Box2