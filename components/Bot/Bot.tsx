"use client";

import React from "react";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

import "./bot.css";
type Props = {};

const Bot = (props: Props) => {
  return (
    <div>
      {" "}
     
      <Chatbot
       //@ts-ignore
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />{" "}
    </div>
  );
};

export default Bot;
