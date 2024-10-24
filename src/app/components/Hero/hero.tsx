import style from "./hero.module.css"

const HeroPage = () => {
    return (
        <div>
            <h2 className={style.css}>This is a Hero Section</h2>
            <br/>
            <p>Mastering Typescript, now diving into Next.js to build faster, scalable web application</p>
        </div>
    )
}
export default HeroPage;