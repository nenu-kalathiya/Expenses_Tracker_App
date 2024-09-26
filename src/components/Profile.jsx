import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const Profile = () => {
    const { userProfile } = useContext(ExpenseContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Profile Information</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label className="font-semibold">Name:</label>
                    <p>{userProfile.name}</p>
                </div>
                <div className="mb-4">
                    <label className="font-semibold">Email:</label>
                    <p>{userProfile.email}</p>
                </div>
                <div className="mb-4">
                    <label className="font-semibold">Phone Number:</label>
                    <p>{userProfile.phoneNumber}</p>
                </div>
                <div className="mb-4">
                    <label className="font-semibold">Profile Picture:</label>
                    {userProfile.photo && (
                        <img src={userProfile.photo} alt="Profile" className="w-24 h-24 rounded-full" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
