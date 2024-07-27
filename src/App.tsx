import './App.css'
import {Layout} from "antd"
import {HeaderApp} from "./page/headerApp.tsx";
import {ContentApp} from "./page/contentApp.tsx";
import {FooterApp} from "./page/footerApp.tsx";

const {Header, Footer, Content} = Layout
function App() {

  return (
      <Layout className='min-h-[100vh] m-0 p-0'>
          <Header><HeaderApp/></Header>
          <Content><ContentApp/></Content>
          <Footer><FooterApp/></Footer>
      </Layout>
  )
}

export default App
