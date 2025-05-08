import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import './App.css'
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

import PostListContextProvider from "./store/post-list-store";
import { useState } from "react";
function App() {

  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <PostListContextProvider>
      <div className="app-container">
           <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
              <div className="content">
                  <Header/>
                    {
                        selectedTab === 'Home' ? (<PostList/>) : (<CreatePost/>)
                    }
                  <Footer/>
              </div>
      </div>    
    </PostListContextProvider>
  );
}

export default App;
