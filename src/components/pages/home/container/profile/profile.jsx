"use client";
import Tab from "@/components/UI/tab/Tab";
import React, { useState } from "react";

const Profile = () => {

    return (
        <div>
            <h1 className="block text-center text-3xl font-bold tracking-tight text-gray-800 mt-4 relative w-fit mx-auto
    after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2">
                Profile
            </h1>

            <Tab />
        </div>
    );
};

export default Profile;
