import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [myList, setMyList] = useState([]);
    console.log(myList)

    console.log(user?.email)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/addSpot-email/${user?.email}`)
                .then(res => res.json())
                .then(data => setMyList(data))
        }

    }, [user])

    return (
        <div className="mt-44">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;