import React from "react";

const BurgerDetail: React.FC<{ params: { burgerId: string } }> = ({params: {burgerId}}) => {
    return <h1>{burgerId}</h1>
}

export default BurgerDetail