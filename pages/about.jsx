// special SSR image component
import Image from "next/image"
import styles from "../styles/About.module.css"


export default function About() {
    return (
        <>
            <div>
                <h1>About!</h1>
                <p className={[styles.bluefont, styles.fontSize].join(" ")}>I don't like candy</p>
                <div>
                    <style jsx>{`
                        .orangeText{
                            color:orange;
                        }

                        .px {
                            font-size: 100px
                        }
                    `}</style>
                    <p className="orangeText px">please hire me, im a starving software engineer</p>
                </div>
                <Image
                    // assumes you in the public folder
                    src="/french-food.jpg"
                    alt="food"
                    width={400}
                    height={300}
                // layout="fill"
                // objectFit="contain"
                />

                <Image
                    src="http://placekitten.com/300/300"
                    alt="beast mode"
                    width={300}
                    height={300}
                />

            </div>
        </>
    )
}
