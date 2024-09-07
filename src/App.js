import React from "react";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Body from "./components/Body";
import ButtonsList from "./components/ButtonsList";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Videos from "./components/Videos";
import WatchVideo from "./components/WatchVideo";
import { store } from "./redux/store";

const App = () => {
  return (
    <div className="bg-[#fff]">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<><ButtonsList/><Videos /></>} />
            <Route path="results" element={[<ButtonsList/>,<SearchResults />]} />
            <Route path="watch" element={<WatchVideo/>}/>
          </Route>
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
