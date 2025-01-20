type TAppLink={
    href:string;
    linkText:string;
}

export const AppLink = ({href, linkText}:TAppLink) => {
    return(
        <a href={href}>{linkText}</a>
    );
};