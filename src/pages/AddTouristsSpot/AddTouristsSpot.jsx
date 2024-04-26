
const AddTouristsSpot = () => {
    return (
        <div className="bg-[#2095AE] font-barlow mb-24 py-16 px-3 lg:px-24 mt-16 lg:mt-24">
            <h2 className="text-4xl font-extrabold text-center mb-5 text-white">Add Tourists Spot Page</h2>
            <form>
                {/* Country and tourists spot name row */}
                <div className="md:flex mb-3 lg:mb-8">
                    <div className="form-control md:w-1/2 mb-3 lg:mb-0">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="countryName" placeholder="Country Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">Tourists Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="touristsSpotName" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* location and average cost row */}
                <div className="md:flex mb-3 lg:mb-8">
                    <div className="form-control md:w-1/2 mb-3 lg:mb-0">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cost" placeholder="Average Cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* season and travel time row */}
                <div className="md:flex mb-3 lg:mb-8">
                    <div className="form-control md:w-1/2 mb-3 lg:mb-0">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">Season</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="season" placeholder="Season" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travelTime" placeholder="Travel Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* image URL and totalVisitorsPerYear row */}
                <div className="md:flex mb-3 lg:mb-8">
                    <div className="form-control md:w-1/2 mb-3 lg:mb-0">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travelTime" placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* user name and email row */}
                <div className="md:flex mb-3 lg:mb-8">
                    <div className="form-control md:w-1/2 mb-3 lg:mb-0">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="User Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="userName" placeholder="User Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* short description row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white text-xl font-medium">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" placeholder="Short Description" className="textarea textarea-bordered textarea-sm w-full" ></textarea>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Tourists Spot" className="btn bg-[#0f2454] text-white text-xl font-medium border-none w-full" />

            </form>
        </div>
    );
};

export default AddTouristsSpot;