
import SideMenu from './SideMenu';
import Header from './Header';
import Post from './Post';
function App() {
  return (
    <div >
      <Header/>
      <div style={{ display:'flex',marginLeft:'100px', width:'80%'}}>
      
        <div style={{width:'70%'}}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>
        <div style={{width:'30%',marginLeft:'35px'}}>
        <SideMenu/>
        </div>
      </div>
    </div>
  );
}

export default App;
