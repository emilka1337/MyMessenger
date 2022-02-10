import ChatList from "./chatList";
import ChatHeader from "./chatHeader";
import CurrentChat from "./currentChat";
import MessageInput from "./messageInput";
import EmojiPanel from "./emojiPanel";
import Sidebar from "./sidebar";
// import DarkMode from "./darkMode";
import SettingsMenu from "./settings/settings";

let chatHeader = new ChatHeader();
let chatList = new ChatList();
let currentChat = new CurrentChat();
let messageInput = new MessageInput();
let emojiPanel = new EmojiPanel();
let sidebar = new Sidebar();
// let darkMode = new DarkMode();
let settingsMenu = new SettingsMenu();

[
    chatHeader,
    chatList,
    currentChat,
    messageInput,
    emojiPanel,
    sidebar,
    // darkMode,
    settingsMenu
].forEach(component => component.init());