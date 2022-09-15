import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Appreciations from "./pages/appreciations/Appreciations";
import Articles from "./pages/articles/Articles";
import ShortSayings from "./pages/shortsayings/ShortSayings";
import NewsFeatures from "./pages/newsfeatures/NewsFeatures";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Add from "./pages/appreciations/Add";
import AddAr from "./pages/articles/Add";
import AddNews from "./pages/newsfeatures/Add";
import AddShort from "./pages/shortsayings/Add";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="appreciations">
              <Route
                index
                element={
                  <RequireAuth>
                    <Appreciations />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="articles">
              <Route
                index
                element={
                  <RequireAuth>
                    <Articles />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="shortSayings">
              <Route
                index
                element={
                  <RequireAuth>
                    <ShortSayings />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="newsFeatures">
              <Route
                index
                element={
                  <RequireAuth>
                    <NewsFeatures />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="appreciations/add">
              <Route
                index
                element={
                  <RequireAuth>
                    <Add />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="articles/add">
              <Route
                index
                element={
                  <RequireAuth>
                    <AddAr />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="newsfeatures/add">
              <Route
                index
                element={
                  <RequireAuth>
                    <AddNews />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="shortsayings/add">
              <Route
                index
                element={
                  <RequireAuth>
                    <AddShort />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
