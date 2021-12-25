import './Design.css'
export default function Design({name, display}) {
    
    const sizes = [
        {name:"mobile", val: 327},
        {name:"table", val: 768},
        {name:"desktop", val: 920}
    ]
    srcSets = (sizes.map(size => display[size.name] ? `/images/${name}/design-${size.name}.svg ${size.val}w`:"")).filter(val => val).join(",\n")

    return (
        <div className={"svgImage"}>
         <img
            srcset={srcSets}
            sizes="(min-width: 1440px) 1440px, (min-width: 768px) 768px, 375px"
            src={`/images/${name}/design-mobile.svg`}
            alt={"design"}
            />
        </div>
        
    )
}