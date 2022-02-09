import ChatList from "./chatList";
import ChatHeader from "./chatHeader";
import CurrentChat from "./currentChat";

let chatHeader = new ChatHeader();
let chatList = new ChatList();
let currentChat = new CurrentChat();

[chatHeader, chatList, currentChat].forEach(component => component.init());