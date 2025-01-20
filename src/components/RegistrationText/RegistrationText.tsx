type TRegistrationText={
    href:string;
    linkText:string;
}

export const RegistrationText = ({href, linkText}:TRegistrationText) => {
    return(
        <a href={href}>{linkText}</a>
    );
};