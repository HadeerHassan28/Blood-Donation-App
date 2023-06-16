import React, { useState } from 'react';

const UserEdit = ({TokenData}) => {

    const [tokenData, setTokenData] = useState({TokenData})


    console.log(tokenData)

    return (
        <div>
            User Edit Page
        </div>
    );
}

export default UserEdit;
