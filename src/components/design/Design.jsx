import './Design.css'
export default function Design({name, display,opaque}) {
    
    const sizes = [
        {name:"mobile", val: 327},
        {name:"table", val: 768},
        {name:"desktop", val: 920}
    ]
    const srcSets = (sizes.map(size => display[size.name] ? `public/images/${name}/design-${size.name}.svg ${size.val}w`:"")).filter(val => val).join(",\n")

    return (
        <div className={"svgImage"} style={{opacity:(opaque? 0.5 : 1)}}>
         <img
            srcSet={srcSets}
            sizes="(min-width: 1440px) 1440px, (min-width: 768px) 768px, 375px"
            src={`public/images/${name}/design-mobile.svg`}
            alt={"design"}
            />
        </div>
        
    )
}