import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import InfoContact from "./components/InfoContact/InfoContact";
import Contacts from "./Pages/Contacts";
import Keypad from "./Pages/Keypad";
import Voicemail from "./Pages/Voicemail";
import EditContact from "./components/EditContact/EditContact";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={InfoContact} />
        <Route path="/" exact component={Contacts} />
        <Route path="/keypad" component={Keypad} />
        <Route path="/voicemail" component={Voicemail} />
      </Switch>
    </Layout>
  );
}

export default App;
