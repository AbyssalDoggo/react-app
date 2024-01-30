import { CssBaseline } from "@mui/joy";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  let name = ["Giới thiệu", "Tin tức", "Dự án", "Báo giá"];
  let links = ["#gioithieu", "#tintuc", "#duan", "#baogia"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <CssBaseline />
      <Header links={links} name={name} onSelectItem={handleSelectItem} />
      <Body />
    </div>
  );
}

export default App;
