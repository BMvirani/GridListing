import { Skeleton } from "@mui/material";
import React from "react";

const UserInfoCard = ({ user }) => {
  return (
    <>
        <div className="user-info-card card-body card text-center">
          <img
            src={user?.image}
            alt={`${user?.firstName} ${user?.lastName}`}
            className="mx-auto user-img"
          />
          <div>
            <h5 className="card-title">{`${user?.firstName} ${user?.lastName}`}</h5>
            <p className="card-text">{user?.email}</p>
          </div>
        </div>
      
    </>
  );
};

export default UserInfoCard;
