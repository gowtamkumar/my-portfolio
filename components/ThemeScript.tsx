export default function ThemeScript() {
  const code = `try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.classList.remove("dark");else document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
