import CheckboxesTags from "./company add form/Company_add_form";
import { useState } from "react";
import AuthTocken from "./company add form/AuthTocken";
import { authTocken } from "./context/authContext";
const App = () => {
  const [tocken, setTocken] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(true);
  const handleSubmit = (tocken: string) => {
    setTocken(tocken);
    setAuth(false);
  };

  return (
    <>
      {auth && <AuthTocken onSubmit={handleSubmit} />}
      {!auth && (
        <authTocken.Provider value={{ tocken }}>
          <CheckboxesTags />
        </authTocken.Provider>
      )}
    </>
  );
};

export default App;
