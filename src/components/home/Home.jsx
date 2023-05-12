import { useState } from "react";
import AddClient from "../client/AddClient";
import AddPet from "../pet/AddPet";

const Home = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            {show ?
                <AddClient setShow={setShow} />
                : <AddPet setShow={setShow} />
            }
        </>
    );
}

export default Home;