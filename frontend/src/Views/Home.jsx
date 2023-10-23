import { CardGrid } from "../Components/CardGrid"
import Content from "../Components/Content_Home"
import "../Styles/css-styles/views.css"

export const Home = () => {
    return (
        <div className="bodyContent">
            <Content/>
            <CardGrid/>
        </div>
    )
}