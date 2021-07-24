import './App.css';
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from  "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from './StateProvide';
function App() {
  const [{user} ,dispatch]=useStateValue();
  return (
    <div className="App">
       {!user?<Login />
         :
         <>
            {/* header component  */}
            <Header />
            {/* app body  */}
            <div className="app_body">
                {/* sidebar */}
               <SideBar className="sidebar"/>
                {/* feed */}
                 <Feed className="feed" />
               {/* widgets */}
               <Widgets />
            </div>  
         </>
      }
     
      
    </div>
  );
}

export default App;
