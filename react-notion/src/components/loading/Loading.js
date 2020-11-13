import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const Loading = () => {
    return (
        <Spin indicator={antIcon} style={{ display: "flex", alignItems: "center", justifyContent:"center", margin: "300px"}} />
    );
};

export default Loading;
