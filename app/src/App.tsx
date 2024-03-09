// API is available at import.meta.env.VITE_API_URL
import axios from "axios";

function App() {
  const shortenUrl = async () => {
    var url = (document.getElementById("url") as HTMLInputElement).value;
    var newUrl = "";
    await axios.get("http://localhost:3008/", { params: { url } }).then((response) => {
      newUrl = response.data;
    });
    if (newUrl.length < url.length) {
      (document.getElementById("url") as HTMLInputElement).value = newUrl;
    }
  }

  return (
    <main>
      <h1>URL shortener</h1>
      <div style={{ display: "flex" }}>
        <textarea id="url" rows={10} style={{ flex: 1, resize: "none" }} />
        <button onClick={shortenUrl}>Shorten</button>
      </div>
    </main>
  );
}

export default App;
