import { useDispatch, useSelector } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItem,icreaseItem } from './cartSlice';
import { getCurrentQuantityById } from "./cartSlice";

function UpdateItemQuantity({pizzaId}) {
    const dispatch = useDispatch();
    const quantity  = useSelector(getCurrentQuantityById(pizzaId));
    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type='round' onClick={()=>dispatch(decreaseItem(pizzaId))}>-</Button>
            <p>{quantity}</p>
            <Button type='round'  onClick={()=>dispatch(icreaseItem(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
