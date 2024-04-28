import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoPencilSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [myList, setMyList] = useState([]);
    console.log(myList)

    // console.log(user?.email)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/addSpot-email/${user?.email}`)
                .then(res => res.json())
                .then(data => setMyList(data))
        }

    }, [user]);


    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/addSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tourists spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = myList.filter(list => list._id !== _id);
                            setMyList(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="mt-28 lg:mt-44 mb-20 mx-[10%]">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#0f2454] text-white text-xl font-roboto font-medium">
                        <tr>
                            <th></th>
                            <th>Tourists Spot</th>
                            <th>Country</th>
                            <th>Season</th>
                            <th>Travel Time</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myList.map((oneRow, idx) => <tr key={oneRow._id} className="hover hover:text-black bg-[#2095AE] text-white text-base font-barlow font-medium">
                                <th>{idx + 1}</th>
                                <td>{oneRow.spotName}</td>
                                <td>{oneRow.countryName}</td>
                                <td>{oneRow.season}</td>
                                <td>{oneRow.travelTime}</td>
                                <td><Link to={`/update/${oneRow._id}`}><IoPencilSharp className="text-xl font-extrabold"></IoPencilSharp></Link></td>
                                <th onClick={() => handleDelete(oneRow._id)}><MdDeleteForever className="text-xl font-extrabold"></MdDeleteForever></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;