import React, { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext";
import {Link, useRouteMatch} from "react-router-dom";

export default function RecipeItem({
    recipeId,
    recipeName,
    recipeImage,
    recipeDuration,
}) {

    let match = useRouteMatch();
    const { theme, colorTheme } = useContext(ThemeContext);

    return (
        <Link
            className={`text-${colorTheme} flex flex-col justify-center relative z-0 max-h-96 w-full md:max-w-xs p-7 border-0 shadow-lg rounded-2xl my-5 cursor-pointer`}
            style={{
                backgroundColor: theme === 'dark' ? '#424242' : '#9FA6C0',
            }}
            to={`${match.url.endsWith('/') ? match.url.slice(0, -1) : match.url}/${recipeId}`}
        >

            {/*Image*/}
            <div className={"grid place-items-center"}>
                <div className="bg-gray-200 rounded-2xl shadow-lg">
                    <img className={"rounded-2xl shadow-lg max-h-64"} src={recipeImage} alt={"No Img"} />
                </div>
            </div>

            <div className={"grid place-items-center mt-5"}>
                <h2 className={"mb-2"}>{recipeName}</h2>
                <h2 className={"mb-2"}>{recipeDuration} min</h2>
            </div>
        </Link>
    );
}
