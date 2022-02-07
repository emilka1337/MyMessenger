import { chatList } from "./chatList";
import UI from "./ui";

chatList.createChatList();

let ui = new UI();
ui.addAllEventListeners();