export default function Tabs({children, buttons, buttonsContainer}) {
    return <>
    <menu>
        {buttons}
    </menu>
    {children}
    </>
}